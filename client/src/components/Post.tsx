import React, { FC } from 'react';
import { IPost } from '../interface/Post';
import {
  PostContainer,
  PostBody,
  PostTitle,
  PostAvatar,
  PostHeader,
  PostFooter,
  PostIcon,
} from './styled/post';
import {
  FaHeart,
  FaPencilAlt,
  FaBookmark,
  FaCommentDots,
} from 'react-icons/fa';
import { IUser } from '../interface/User';
interface Props {
  user: IUser;
  post: IPost;
}
const Post: FC<Props> = props => {
  return (
    <PostContainer>
      <PostHeader>
        <PostAvatar src={props.post.from.displayImage} />
        <PostTitle>{props.post.from.name}</PostTitle>
      </PostHeader>
      {props.post.media && <img src={props.post.media.URL} />}
      <PostBody>{props.post.body}</PostBody>
      <PostFooter>
        <PostIcon liked={props.user.likedPost.includes(props.post)}>
          <FaHeart />
        </PostIcon>
        <PostIcon>
          <FaCommentDots />
        </PostIcon>
        <PostIcon liked={props.user.favPost.includes(props.post)}>
          <FaBookmark />
        </PostIcon>
        {props.post.from.id === props.user.id && (
          <PostIcon>
            <FaPencilAlt />
          </PostIcon>
        )}
      </PostFooter>
    </PostContainer>
  );
};

export default Post;
