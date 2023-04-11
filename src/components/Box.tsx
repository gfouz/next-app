import styled from 'styled-components';

interface IBox {
  bg?: string;
  w?: string;
  p?: string;
  color?: string;
  bezel?: string;
}

export const Box = styled.div<IBox>`
  background-color: ${(props) => props.bg};
  width: ${(props) => props.w};
  padding: ${(props) => props.p};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.bezel};
`;
