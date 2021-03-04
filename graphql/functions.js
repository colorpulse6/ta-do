import gql from 'graphql-tag';

export const getCategories = gql`
  query {
    categories {
      name
      color
      date
    }
  }
`;
