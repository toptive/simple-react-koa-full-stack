const Article = require('./models/articles');
const authService =  require('./services/auth');

const resolvers = {
  Query: {
    articles: async (parent, args, ctx, info) => {
      if(!ctx.user) throw new Error('Not authorized');

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
    register: async (parent, { user }, ctx, info) => {
      return await authService.register(user.username, user.password);
    },
    login: async (parent, { user }, ctx, info) => {
      return await authService.login(user.username, user.password);
    }

  }
};

module.exports = resolvers;
