import gql from "graphql-tag";

export const SIGN_UP = gql`
  mutation($data: RegisterInput!) {
    createUser(data: $data) {
      id
    }
  }
`;
export const UPLOAD_PRO = gql`
  mutation ADD_PRO($file: Upload!) {
    addProfilePicture(picture: $file)
  }
`;
