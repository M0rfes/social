import { Resolvers } from 'apollo-client';
import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type Query {
    isLogin: Boolean!
  }
`;

export const resolvers: Resolvers = {
  Query: {},
  Mutation: {},
};
