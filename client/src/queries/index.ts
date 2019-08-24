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
      id
      name
      displayName
      displayImage
      numOfFollowing
      numOfFollowers
      posts(pagination: { limit: 10 }) {
        id
        body
        media {
          url
        }
      }
    }
  }
`;

export const IS_LOGIN = gql`
  query IsLogin {
    isLogin @client
  }
`;

export const GET_BY_ID = gql`
  query FindOneById($data: FindUserInput!) {
    findOneUser(data: $data) {
      name
      displayName
      displayImage
      numOfFollowing
      numOfFollowers
      posts(pagination: { limit: 10 }) {
        id
        body
        media {
          url
        }
      }
    }
  }
`;
