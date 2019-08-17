import styled from 'styled-components';
import { NaveImage } from './nave';
export const PostContainer = styled.article`
  border-bottom: ${props => props.theme.dark} solid 1px;
`;
export const PostBody = styled.p`
  margin: 1rem;
  padding: auto;
`;
export const PostTitle = styled.h2`
  margin: 1rem 0 0 1rem;
`;
export const PostAvatar = styled(NaveImage)``;
