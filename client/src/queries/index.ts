import gql from 'graphql-tag';
export const SIGN_IN = gql`
  query Login($data: LoginInput!) {
    login(data: $data) {
      token
    }
  }
`;

export const GET_ME = gql`
  query ME {
    me {
      name
      displayName
    }
  }
`;
