const { gql } = require('apollo-server-koa');

const typeDefs = gql`
  type Article {
    id: Int
    title: String
    body: String
  }

  type User {
    username: String
    token: String
  }

  input ArticleInput {
    title: String
    body: String
  }

  input UserInput {
    username: String
    password: String
  }

  type Query {
    articles: [Article]
  }

  type Mutation {
    createArticle(article: ArticleInput): Article
    register(user: UserInput): User
    login(user: UserInput): User
  }
`

module.exports = typeDefs;
