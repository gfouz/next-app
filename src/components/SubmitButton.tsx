import styled, { keyframes } from 'styled-components';

const jello = keyframes`
 0% {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }

`;

export const SubmitButton = styled.button.attrs({ type: 'submit' })`
  border: none;
  border-radius: 10px;
  margin: 1em 0;
  padding: 0.5em 4em;
  transition: 1s;
  color: #f1f1f1;
  background-color: #444444;
  &.jello {
    animation: ${jello} 1s both;
  }
  &:hover {
    background-color: #000000;
  }
`;
