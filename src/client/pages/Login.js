import React, { useState, useContext } from 'react';
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { Redirect, navigate } from "@reach/router";

import UserContext, { UserProvider } from '../UserContext';

const LoginMutation = gql`
  mutation Login($user: UserInput!) {
    login(user: $user) {
      username
      token
    }
  }
`;

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState();

  const { setUser, user } = useContext(UserContext);

  const onChangeUsername = e => setUsername(e.target.value);
  const onChangePassoword = e => setPassword(e.target.value);

  if(user && user.token) {
    return <Redirect to="/" noThrow />
  }

  return (
    <div>
      <h1>Login</h1>
      <Mutation mutation={LoginMutation}>
        {(login, { error, loading, data }) => {
          if(data) {
            setUser(data.login);
            location.reload();
            return <h1>Welcome {data.login.username}</h1>
          }

          setUserData(null);

          return (
            <div>
             {error && <p>Error :( Please try again</p>}
             {loading && <p>Loading...</p>}
              <form
                onSubmit={e => {
                  e.preventDefault();
                  login({ variables: { user: {username, password} } });
                }}
              >
                <label>Username</label>
                <input value={username} onChange={onChangeUsername} />
                <label>Passoword</label>
                <input value={password} onChange={onChangePassoword} type="password" />
                <button type="submit">Login</button>
              </form>
            </div>
          );
        }
      }
      </Mutation>
    </div>
  );
}
