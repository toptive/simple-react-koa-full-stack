import React, { useState } from 'react';

const UserContext = React.createContext({
  user: null,
  setUser: () => {}
});

const username = localStorage.getItem('username') || '';
const token = localStorage.getItem('token') || '';

const userLocalStorage = username ? {
  username,
  token,
} : null;

export const UserProvider = ({ children }) => {
  const setUser = (user) => {

    console.log('UserProvider setUser user', user);

    localStorage.setItem('username', user ? user.username : '');
    localStorage.setItem('token', user ? user.token : '');

    updateUser(prevState => {
      return {
        ...prevState,
        user
      }
    });
  };

  const [userValue, updateUser] = useState({
    user: userLocalStorage,
    setUser,
  });

  return (
    <UserContext.Provider value={userValue}>
      {children}
    </UserContext.Provider>
  )
}

export const UserConsumer = UserContext.Consumer;

export default UserContext;
