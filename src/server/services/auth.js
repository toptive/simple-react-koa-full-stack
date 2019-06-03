const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/users');

const secret = process.env.JWT_SECRET || '_MP!fHe7KEbLP*UALuyt9ufU$n*h@j*7dU%';

const getUser = (token) => {
  try {
    if (token) {
      return jwt.verify(token, secret);
    }
    return null;
  } catch (err) {
    return null;
  }
}

const register = async (username, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.forge({
    username,
    password: hashedPassword,
  })
  .save();

  return user;
};

const login = async (username, password) => {
  const userObj = await User.collection()
    .query({ where: { username } })
    .fetchOne();

  if (!userObj) {
    throw new Error('Invalid Login');
  }

  const user = userObj.toJSON();

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error('Invalid Login');
  }

  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    secret,
    {
      expiresIn: '30d', // token will expire in 30days
    },
  );

  return {
    token,
    username,
  };
}

module.exports = {
  getUser,
  register,
  login,
};
