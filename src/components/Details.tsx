import styled from 'styled-components';

interface IDetails {
  color?: string;
  bg?: string;
}

export const Details = styled.details<IDetails>`
  grid-area: details;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
`;
