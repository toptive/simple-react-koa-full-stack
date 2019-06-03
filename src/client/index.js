import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import './index.css';

import Routes from './Routes';
import { UserProvider } from './UserContext';

const token = localStorage.getItem('token');

const client = new ApolloClient({
  request: async operation => {
    operation.setContext({
      headers: {
        authorization: 'Bearer ' + token,
      }
    });
  },
});


const App = () => (
  <UserProvider>
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  </UserProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
