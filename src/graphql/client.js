import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://codekpi-backend-graphql-4115.onrender.com/graphql",
  }),
  cache: new InMemoryCache(),
});
