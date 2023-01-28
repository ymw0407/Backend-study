// index.js

// const { ApolloServer, gql } = require('apollo-server');
import { ApolloServer, gql } from 'apollo-server'

// The GraphQL schema // API DOCS 와 동일
const typeDefs = gql`
  type BoardReturn {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    # fetchBoards: BoardReturn => 객체 1개를 의미
    fetchBoards: [BoardReturn] # => 배열 안에 객체 1개를 의미 
  }

  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  type Mutation {
    # createBoard(writer: String, title: String, contents: String): String # => 입력값을 받아오는 날개
    createBoard(createBoardInput: CreateBoardInput!): String # => 입력값을 객체로 받음
  }
`

// A map of functions which return data for the schema.
const resolvers = { // API 와 동일
  Mutation: {
    createBoard: (_, args) => {
      console.log(args)
      
      return '게시물 등록에 성공하였습니다'
    }
  },
  Query: {
    fetchBoards: () => {
      const result = [
        {
          number: 1,
          writer: '철수',
          title: '제목입니다',
          contents: '내용이에요11'
        },
        {
          number: 2,
          writer: '짱구',
          title: '제목입니다',
          contents: '내용이에요22'
        },
        {
          number: 1,
          writer: '훈이',
          title: '제목입니다',
          contents: '내용이에요33'
        }
      ]
      return result
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen(3000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url} on port ${3000}`)
})