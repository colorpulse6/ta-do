import gql from 'graphql-tag';

export const GET_CATEGORIES = gql`
  query {
    categories {
      id
      name
      color
      date
    }
  }
`;

export const LOGGED_IN_USER = gql`
  query {
    me {
      id
      username
      email
    }
  }
`;

export const ADD_CATEGORY = gql`
  mutation($name: String!, $color: String!) {
    insert_categories(objects: { name: $name, color: $color }) {
      affected_rows
      returning {
        id
        name
        color
        date
      }
    }
  }
`;

export const DELETE_CATEGORY = gql`
  mutation delete_categories($id: Int!) {
    delete_categories(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

export const ADD_USER = gql`
  mutation signup($username: String!, $email: String!, $password: String!) {
    signup(email: $email, username: $username, password: $password) {
      token
      user {
        id
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
