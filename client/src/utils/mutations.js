import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
                username
                password
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $password: String!) {
        addUser(username: $username, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_POST = gql`
    mutation addPost($title: String!, $content: String!) {
        addPost(title: $title, content: $content) {
        _id
        title
        content
        createdAt
        }
    }
`

export const UPDATE_POST = gql`
    mutation updatePost($id: ID!, $title: String!, $content: String!) {
        updatePost(_id: $id, title: $title, content: $content) {
        _id
        title
        content
        createdAt
        }
    }
`

export const DELETE_POST = gql`
    mutation deletePost($id: ID!) {
        deletePost(_id: $id) {
        _id
        title
        content
        createdAt
        }
    }
`