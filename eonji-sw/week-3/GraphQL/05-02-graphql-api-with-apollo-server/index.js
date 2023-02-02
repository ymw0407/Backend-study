// Nodemon 적용

// const { ApolloServer, gql } = require('apollo-server');
import { ApolloServer, gql } from 'apollo-server'

// The GraphQL schema
// type 지정을 도와주는 역할
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

// A map of functions which return data for the schema.
// express 서버의 api와 같은 역할
const resolvers = {
  Query: {
    hello: () => 'Hello, World',
  },
};

// 서버를 정의
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// 서버를 열어준 뒤 .then() 내부의 내용 실행
server.listen(3000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url} on port ${3000}`);
});