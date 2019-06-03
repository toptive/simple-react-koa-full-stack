const Koa = require('koa');
// const jwt = require('koa-jwt');
const bcrypt = require('bcryptjs')

const serve = require('koa-static');
const session = require('koa-session');
const cors = require('@koa/cors');
const { ApolloServer } = require('apollo-server-koa');

require('./db');

const router = require('./routes');
const resolvers = require('./resolvers');
const schema = require('./schema');
const authService =  require('./services/auth');

const app = new Koa();


const apolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: async ({req, ctx}) => {
    const tokenWithBearer = ctx.req.headers.authorization || '';
    const token = tokenWithBearer.split(' ')[1];
    const user = authService.getUser(token);

    console.log('ApolloServer context user', user);

    // if(!user) throw "Unauthorized";
    return {
      user,
    }
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
