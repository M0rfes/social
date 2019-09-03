import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import * as serviceWorker from "./serviceWorker";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "apollo-link-context";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";
import { typeDefs, resolvers } from "./resolvers/index";
import "./animate.css";
import "./index.css";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const uploadLink = createUploadLink({ uri: "http://localhost:4000/graphql" });
uploadLink.concat(httpLink);
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      "x-auth-token": token ? token : "",
    },
  };
});
console.log(uploadLink);
const client = new ApolloClient({
  link: authLink.concat(uploadLink),
  cache: new InMemoryCache(),
  typeDefs,
  resolvers,
});
console.log(client.cache);
client.writeData({ data: { isLogin: !!localStorage.getItem("token") } });
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,

  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
