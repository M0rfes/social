import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Logo = styled.i<{ primary?: boolean; color?: string }>`
  font-size: 3rem;
  color: ${prop => (prop.primary ? prop.theme.primary : prop.color)};
  margin: 1rem;
`;
export const Wrapper = styled.main`
  display: flex;
  flex-flow: column;
  @media screen and (min-width: 1024px) {
    flex-flow: row-reverse;
  }
`;
export const Section = styled.section<{ primary?: boolean }>`
  text-align: center;
  background: ${prop => (prop.primary ? prop.theme.primary : '')};
  @media screen and (min-width: 1024px) {
    padding-top: 10rem;
    width: 100vw;
    height: 100vh;
  }
`;
export const Title = styled.h1`
  margin: 1rem;
  padding: 1.5rem;
`;
export const Lead = styled.p`
  margin: 1rem;
  padding: 1rem;
`;
export const SLink = styled(Link)<{ primary?: boolean; block?: boolean }>`
  display: ${props => (props.block ? 'block' : '')};
  background: ${props =>
    props.primary ? props.theme.primary : props.theme.info};
  color: ${props => (props.primary ? '#FFFFFF' : '#000000')};
  width: 90%;
  padding: 0.5rem;
  margin: auto;
  margin-bottom: 2rem;
  &:hover,
  &:active {
    background: ${props =>
      props.primary ? props.theme.primaryDarker : props.theme.infoDarker};
    transition: 200ms all ease-in;
  }
  @media screen and (min-width: 1024px) {
    margin: 1rem;
  }
`;
export const SignUPForm = styled.form`
  margin: auto;
  width: 80vw;
`;
export const InputContainer = styled.div<{ error?: any }>`
  width: 100%;
  background: ${props => props.theme.secondary};
  border-bottom: 2px solid
    ${props => (props.error ? props.theme.error : props.theme.primary)};
  margin: 1.5rem 0;
  * {
    display: inline-block;
  }
  label {
    margin: 1rem 0 0.5rem 1rem;
    color: ${props => (props.error ? props.theme.error : props.theme.primary)};
  }
  input {
    font-size: 1.5rem;
    margin: 0 0.5rem;
    width: 100%;
    color: ${props => (props.error ? props.theme.error : props.theme.primary)};
  }
  select {
    width: 90%;
    margin: 0 0.5rem;
    border: none;
    outline: none;
    font-size: 1rem;
    background: transparent;
    appearance: none;
  }
`;
export const SubmitButton = styled.button`
  padding: 1rem 1.5rem;
  width: 100%;
  margin: 1rem auto;
  background: ${prop => prop.theme.primary};
  color: #ffffff;
  &:active,
  &:hover {
    background: ${props => props.theme.primaryDarker};
    transition: 200ms all ease-in;
  }
  &:disabled {
    cursor: not-allowed;
    background: ${prop => prop.theme.info};
  }
`;

export const Errors = styled.span`
  color: ${prop => prop.theme.error};
`;
export const Container = styled.main`
  width: 80vw;
  margin: auto;
`;
export const Background = styled.div`
  background: ${props => props.theme.secondary};
  min-height: 100vh;
  padding: 1% 0;
`;
