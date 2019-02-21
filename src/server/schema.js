const { gql } = require('apollo-server-koa');

const typeDefs = gql`
  type Article {
    id: Int
    title: String
    body: String
  }

  input ArticleInput {
    title: String
    body: String
  }

  type Query {
    articles: [Article]
  }

  type Mutation {
    createArticle(article: ArticleInput): Article
  }
`

module.exports = typeDefs;
