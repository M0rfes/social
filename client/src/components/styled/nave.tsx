import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  background: ${props => props.theme.secondary};
  align-items: center;
  padding: 0 auto;
  h1 {
    font-weight: bolder;
    margin-right: auto;
  }
`;
export const NaveImage = styled.img`
  display: inline-block;
  margin: 0 0 0 0.5rem;
  border-radius: 50%;
  width: 10vw;
  height: 10vw;
`;
export const ActionBar = styled.div`
  background: inherit;
`;
