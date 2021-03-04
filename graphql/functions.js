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
