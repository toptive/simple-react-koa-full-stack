import React, { useState, useEffect } from 'react';
import { Link } from "@reach/router";

export default function Home() {
  const [username, setUsername] = useState(null);

  // Example calling api
  useEffect(() => {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => setUsername(user.username));
  }, []);

  // Example calling graphql
  useEffect(() => {
    fetch('/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `{
          articles {
            title
            body
          }
        }`
      }),
    })
      .then(res => res.json())
      .then(console.log);
  }, []);

  return (
    <div>
      {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
      <Link to="login">Login</Link>
    </div>
  );
}
