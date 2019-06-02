import React from 'react';
import { Router } from "@reach/router";

import Home from './pages/Home';
import Login from './pages/Login';

export default function Routes() {
  return (
    <Router>
      <Home path="/" />
      <Login path="login" />
    </Router>
  );
}
