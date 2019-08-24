import styled from 'styled-components';
const Loader = styled.div`
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: #38a1f3;
  background: gradient(left, #38a1f3 10%, rgba(56, 161, 243, 0) 42%);
  background: linear-gradient(left, #38a1f3 10%, rgba(56, 161, 243, 0) 42%);
  background: linear-gradient(left, #38a1f3 10%, rgba(56, 161, 243, 0) 42%);
  background: linear-gradient(left, #38a1f3 10%, rgba(56, 161, 243, 0) 42%);
  background: linear-gradient(to right, #38a1f3 10%, rgba(56, 161, 243, 0) 42%);
  position: relative;
  animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  transform: translateZ(0);
  transform: translateZ(0);
  transform: translateZ(0);
  &:before {
    width: 50%;
    height: 50%;
    background: #38a1f3;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  &:after {
    background: #f9f9f9;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @keyframes load3 {
    0% {
      transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load3 {
    0% {
      transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
