const Koa = require('koa');
const serve = require('koa-static');
const session = require('koa-session');
const cors = require('@koa/cors');
const { ApolloServer } = require('apollo-server-koa');

require('./db');

const router = require('./routes');
const resolvers = require('./resolvers');
const schema = require('./schema');

const app = new Koa();

const apolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: async ({ctx}) => {
    return {};
  },
});

app.use(cors());
app.use(session(app));
app.use(serve('dist'));
app.use(router.routes());
app.use(router.allowedMethods());
apolloServer.applyMiddleware({
  app: app,
  path: '/graphql',
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
