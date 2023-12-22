const typeDefs = `

    type Post {
        _id: ID
        title: String
        content: String!
        createdAt: String!
    }

    type User {
        _id: ID
        username: String!
        password: String!
        posts: [Post]
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        posts: [Post]
    }

    type Mutation {
        addUser(username: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        addPost(title: String!, content: String!): Post
        updatePost(_id: ID!, title: String!, content: String!): Post
        deletePost(_id: ID!): Post
    }
`;

module.exports = typeDefs;