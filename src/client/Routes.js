import React from 'react';
import { Router } from "@reach/router";

import Layout from './Layout';

import Home from './pages/Home';
import Login from './pages/Login';
import Articles from './pages/Articles';

const NotFound = () => (
  <div>Sorry, nothing here.</div>
);

export default function Routes() {
  return (
    <Router>
      <Layout path="/">
        <Home path="/" />
        <Articles path="articles" />
      </Layout>
      <Login path="login" />
      <NotFound default />
    </Router>
  );
}
