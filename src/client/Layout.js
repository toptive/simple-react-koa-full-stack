import React from 'react';
import { Link } from "@reach/router";

export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/articles">Articles</Link>
      </nav>
      {children}
    </div>
  );
}

