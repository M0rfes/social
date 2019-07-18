import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { createSchema } from './util/createSchema';
import { userLoader } from './dataLoader/user.loader';

const main = async () => {
  await mongoose.connect('mongodb://localhost:27017/socail', {
    useNewUrlParser: true,
    useCreateIndex: true,
  });
  const schema = await createSchema();

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res, userLoader: userLoader() }),
  });

  const app = Express();

  app.use(
    cors({
      credentials: true,
      origin: 'http://localhost:3000',
    }),
  );

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log('server started on http://localhost:4000/graphql');
  });
};

main();
