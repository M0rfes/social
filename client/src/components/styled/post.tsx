import styled from 'styled-components';
import { NaveImage } from './nave';
export const PostContainer = styled.article`
  border-bottom: ${props => props.theme.dark} solid 1px;
`;
export const PostHeader = styled.div`
  display: flex;
  align-items: center;
`;
export const PostBody = styled.p`
  width: 80%;
  margin: auto;
  color: ${props => props.theme.dark};
  padding: auto;
`;
export const PostFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const PostTitle = styled.h3`
  display: inline-block;
  color: ${props => props.theme.primary};
  margin: 1rem 0 0 1rem;
`;
export const PostIcon = styled.i<{ liked?: boolean }>`
  font-size: 1.5rem;
  margin: 0;
  padding: 0.5rem;
  color: ${props => (props.liked ? props.theme.error : props.theme.info)};
`;
export const PostAvatar = styled(NaveImage)``;
