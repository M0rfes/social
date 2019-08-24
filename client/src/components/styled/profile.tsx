import styled from 'styled-components';
import { NaveImage } from './nave';
import { Link } from 'react-router-dom';

export const ProfileImage = styled(NaveImage)`
  flex: 1;
  width: 25vw;
  height: 25vw;
  margin: 0 2rem;
`;
export const ProfileCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: ${props => props.theme.dark} 1px solid;
  justify-content: space-between;
  align-items: center;
`;
export const EditButton = styled(Link)`
  text-align: center;
  padding: 0.5rem 2rem;
  margin: 1rem;
  border: ${props => props.theme.primary} 2px solid;
  h1 {
    margin: 0;
    padding: 0;
  }
  &:focus,
  &:hover {
    background: ${props => props.theme.primary};
    transition: all 300ms ease-in-out;
  }
`;
export const Bio = styled.p`
  grid-column: span 2;
  padding: 1rem;
  margin: 0.5rem;
  word-wrap: break-word;
`;
