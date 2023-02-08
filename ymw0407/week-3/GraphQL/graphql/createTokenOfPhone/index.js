import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";
import { ApolloServer, gql } from "apollo-server";

const Logs = [];

const now = () => {
    const date = new Date();
    const yyyy = String(date.getFullYear()).padStart(4, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const hh = String(date.getHours()).padStart(2, "0");
    const mi = String(date.getMinutes()).padStart(2, "0");
    const ss = String(date.getSeconds()).padStart(2, "0");

    return `${yyyy}년 ${mm}월 ${dd}일 ${hh}:${mi}:${ss}`;
};

const resolvers = {
    Mutation: {
        createTokenOfPhone: (_, args) => {
            const isValid = checkValidationPhone(args.myphone);
            if (isValid) {
                const mytoken = getToken();
                sendTokenToSMS(args.myphone, mytoken);
                const log = {
                    token: mytoken,
                    phone: args.myphone,
                    createdAt: now(),
                };
                Logs.push(log);
                return "인증완료!!!";
            }
        },
    },
    Query: {
        fetchLogs: () => {
            return Logs;
        },
    },
};

const typeDefs = gql`
    type LogReturn {
        "Log를 반환하는 함수입니다."
        token: Int!
        phone: String!
        createdAt: String!
    }
    type Query {
        "Log를 가져오는 Query입니다."
        fetchLogs: [LogReturn] # => 배열 안에 객체 1개 이상을 의미
    }
    type Mutation {
        "Token을 발행하는 Mutation입니다."
        createTokenOfPhone(myphone: String!): String
    }
`;

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen(3000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url} on port ${3000}`);
});
