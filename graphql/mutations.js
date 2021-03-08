import gql from 'graphql-tag';

export const GET_CATEGORIES = gql`
  query {
    userCategories {
      title
    }
  }
`;

export const ADD_CATEGORY = gql`
  mutation($title: String!, $color: String!, $userId: Int!) {
    addCategory(title: $title, color: $color, userId: $userId) {
      title
      color
      userId
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
