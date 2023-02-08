import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
    type BoardReturn {
        "게시물에 포함되는 내용들을 제공합니다."
        number: Int! # 여기서 !는 required를 의미합니다.
        writer: String!
        title: String!
        contents: String
    }

    type Query {
        "게시물을 조회하는 API입니다."
        fetchBoards: [BoardReturn] # 배열로 리턴
    }

    input CreateBoardInput {
        writer: String!
        title: String!
        contents: String
    }

    type Mutation {
        "게시물을 추가, 수정, 삭제하는 API입니다."
        # createBoard(writer: String!, title: String!, contents: String) : String # 입력값을 낱개로 받아오는 것을 의미
        createBoard(createBoardInput: CreateBoardInput!): String # 입력값을 객체로 받아오고 String으로 리턴하는 것을 의미
    }
`;

const resolvers = {
    Query: {
        fetchBoards: () => {
            const result = [
                {
                    number: 1,
                    writer: "철수",
                    title: "제목입니다~~",
                },
                {
                    number: 2,
                    writer: "영희",
                    title: "영희 제목입니다~~",
                    contents: "영희 내용이에요@@@",
                },
                {
                    number: 3,
                    writer: "훈이",
                    title: "훈이 제목입니다~~",
                    contents: "훈이 내용이에요@@@",
                },
            ];

            return result;
        },
    },
    Mutation: {
        // parent는 부모 타입 resolver에서 반환된 객체를 가진 객체
        // args는 쿼리 요청 시 전달된 parameter를 가진 객체
        // context는 GraphQL의 모든 resolver가 공유하는 객체로서 로그인 인증, 데이터베이스 접근 권한 등에 사용
        // info는 명령 실행 상태 정보를 가진 객체
        createBoard: (parent, args, context, info) => {
            // console.log("parent:", parent);
            console.log("args:", args);
            // console.log("context:", context);
            // console.log("info:", info);

            return "게시물 등록에 성공하였습니다!!!"
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen(3000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url} on port ${3000}`);
});
