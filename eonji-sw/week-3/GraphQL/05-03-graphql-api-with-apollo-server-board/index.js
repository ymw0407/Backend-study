// GraphQL-API 만들기

import { ApolloServer, gql } from 'apollo-server'

// type 지정을 도와주는 역할
const typeDefs = gql`
  type BoardReturn {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    # fetchBoards: BoardReturn => 객체 1개를 의미
    fetchBoards: [BoardReturn]  # => 배열 안에 객체 1개 이상을 의미
  }

  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  type Mutation {
    # createdBoard(writer: String, title: String, contents: String): String  # => 입력값을 낱개로 받아오는 것을 의미
    createBoard(createBoardInput: CreateBoardInput!): String  # => 입력값을 객체로 받아오는 것을 의미
  }
`;

// express 서버의 api와 같은 역할
const resolvers = {
  Query: {
    fetchBoards: () => {
      // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
      const result = [
        {
          number: 1,
          writer: '철수',
          title: '제목입니다~~',
          contents: '내용이에요@@@',
        },
        {
          number: 2,
          writer: '영희',
          title: '영희 제목입니다~~',
          contents: '영희 내용이에요@@@',
        },
        {
          number: 3,
          writer: '훈이',
          title: '훈이 제목입니다~~',
          contents: '훈이 내용이에요@@@',
        },
      ];

      // 2. 꺼내온 결과 응답 주기
      return result;
    },
  },

  Mutation: {
    createBoard: (_, args) => {
      // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
      console.log(args);

      // 2. 저장 결과 응답 주기
      return '게시물 등록에 성공하였습니다!!';
    },
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