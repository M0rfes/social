import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import cors from 'cors';
import { createSchema } from './util/createSchema';
import connectRedis = require('connect-redis');
import { redis } from './redis';

const main = async () => {
  await mongoose.connect('mongodb://localhost:27017/socail', {
    useNewUrlParser: true,
    useCreateIndex: true,
  });
  const schema = await createSchema();

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res }),
  });

  const app = Express();

  const RedisStore = connectRedis(session);

  app.use(
    cors({
      credentials: true,
      origin: 'http://localhost:3000',
    }),
  );

  app.use(
    session({
      store: new RedisStore({
        client: redis as any,
      }),
      name: 'qid',
      secret: 'aslkdfjoiq12312',
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years
      },
    }),
  );

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log('server started on http://localhost:4000/graphql');
  });
};

main();
