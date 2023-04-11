import styled from 'styled-components';

export const OneButton = styled.button`
  cursor: pointer;
  width: 160px;
  padding: 0.5em 0;
  margin: 0.5em;
  color: #ffffff;
  font-weight: bolder;
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: blue;
  &:hover {
    filter: drop-shadow(0 0 2em #f1f1f1);
  }
`;
