import React, { FC } from 'react';
import { IPost } from '../interface/Post';
import { PostContainer, PostBody, PostTitle, PostAvatar } from './styled/post';
import { Title } from './styled';
interface Props {
  post: IPost;
}
const Post: FC<Props> = props => {
  return (
    <PostContainer>
      <PostAvatar src={props.post.from.displayImage} />
      <PostTitle>{props.post.from.name}</PostTitle>
      <PostBody>{props.post.body}</PostBody>
    </PostContainer>
  );
};

export default Post;
