import React, { useState, useEffect } from 'react';

export default function Home() {
  const [username, setUsername] = useState(null);

  // Example calling api
  useEffect(() => {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => setUsername(user.username));
  }, []);

  return (
    <div>
      {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
    </div>
  );
}
