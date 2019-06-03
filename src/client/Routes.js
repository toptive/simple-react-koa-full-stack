import React from 'react';
import { Router } from "@reach/router";

import Layout from './Layout';

import Home from './pages/Home';
import Login from './pages/Login';
import Articles from './pages/Articles';

export default function Routes() {
  return (
    <Router>
      <Layout path="/">
        <Home path="/" />
        <Login path="login" />
        <Articles path="articles" />
      </Layout>
    </Router>
  );
}
