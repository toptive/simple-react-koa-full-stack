import React, { useContext } from 'react';
import { Link, Redirect } from "@reach/router";
import UserContext from './UserContext';

export default function Layout({ children }) {
  const userContext = useContext(UserContext);

  if(!userContext.user || !userContext.user.token) {
    console.log('redirect!!')
    return <Redirect to="/login" noThrow />
  }

  const logout = () => {
    userContext.setUser(null);
  }

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/articles">Articles</Link>
        <a onClick={logout} href="#">Logout</a>
      </nav>
      {children}
    </div>
  );
}

