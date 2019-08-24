import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  background: white;
  align-items: center;
  padding: 0 auto;
  h1 {
    font-weight: bolder;
    margin: 0;
    margin-right: auto;
    padding: auto;
  }
`;
export const NaveImage = styled.img`
  display: inline-block;
  margin: 0.5rem;
  border-radius: 50%;
  width: 10vw;
  height: 10vw;
  max-width: 70px;
  max-height: 70px;
`;
export const ActionBar = styled.div`
  position: sticky;
  background: white;
  display: flex;
  top: 0;
  z-index: 9;
  border-bottom: ${props => props.theme.dark} solid 1px;
  justify-content: space-evenly;
  i {
    font-size: 2rem;
  }
`;
