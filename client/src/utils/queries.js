import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
    query Query {
        posts {
        _id
        title
        content
        createdAt
        }
    }
`