import styled from 'styled-components';

interface IFooter {
  color?: string;
  bg?: string;
}

export const Footer = styled.footer`
  grid-area: footer;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  text-transform: uppercase;
  color: ${(props: IFooter) => props.color || '#fff4a3'};
  background-color: ${(props: IFooter) => props.bg || '#000000'};
`;
