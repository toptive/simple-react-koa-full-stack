const Article = require('./models/articles');

const resolvers = {
  Query: {
    articles: async (parent, args, ctx, info) => {
      const articles = await Article
        .fetchAll()
        .then(function(articles) {
          return articles.toJSON();
        });

      return articles;
    },
  },
  Mutation: {
    createArticle: async (parent, args, ctx, info) => {
    },
  }
};

module.exports = resolvers;
