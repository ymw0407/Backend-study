export const options = {
    definition: {
        openApi: "3.0.0",
        info: {
            title: "Express Assignment 3",
            version: "1.0.0",
            description: "A REST API using swagger and express",
        },
    },
    apis: ["./swagger/starbucks.swagger.js", "./swagger/users.swagger.js"],
};