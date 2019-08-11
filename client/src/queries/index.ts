import gql from 'graphql-tag';
export const SIGN_IN = gql`
  query Login($data: LoginInput!) {
    login(data: $data) {
      token
    }
  }
`;
