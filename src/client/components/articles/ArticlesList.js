import React from 'react';

export default function ArticlesList({articles}) {
  return <ul>
  {
    articles.map(({ title, body }) => (
      <div key={title}>
        <p>{title}: {body}</p>
      </div>
    ))
  }
  </ul>
}
