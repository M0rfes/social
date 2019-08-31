import gql from "graphql-tag";

export const SIGN_UP = gql`
  mutation($data: RegisterInput!) {
    createUser(data: $data) {
      id
    }
  }
`;
