import React, { useState, useEffect } from 'react';

import './app.css';
import reactImage from './react.png';

export default function App() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => setUsername(user.username));
  }, []);

  return (
    <div>
      {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
      <img src={reactImage} alt="react" />
    </div>
  );
}
