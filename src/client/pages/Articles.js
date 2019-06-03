import React, { useState, useEffect } from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import ArticlesList from '../components/articles/ArticlesList';

const articlesQuery = gql`
  {
    articles {
      title
      body
    }
  }
`;

export default function Articles() {
  return (
    <div>
      <h1>Articles</h1>
      <Query query={articlesQuery}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;

          return <ArticlesList articles={data.articles} />
        }}
      </Query>
    </div>
  );
}
