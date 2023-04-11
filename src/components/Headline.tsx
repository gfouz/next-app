import styled, { css } from 'styled-components';

interface IProps {
  color?: string;
  m?: string;
  p?: string;
  mt?: boolean;
  ml?: string;
  size?: string;
  right?: boolean;
  upper?: boolean;
  fontfam?: string;
  spacing?: string;
  bolder?: boolean;
  center?: boolean;
  italic?: boolean;
  bottom?: boolean;
}
const bottom = css`
  position: absolute;
  bottom: 1em;
`;
const normal = css`
  position: static;
`;
export const Headline = styled.div<IProps>`
  width: 100%;
  cursor: pointer;
  ${(props) => (props.bottom ? bottom : normal)};
  color: ${(props) => props.color};
  margin-left: ${(props) => props.ml};
  margin-top: ${(props) => (props.mt ? '1em' : '0')};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  text-align: ${(props) => (props.center ? 'center' : 'left')};
  font-size: ${(props) => props.size};
  letter-spacing: ${(props) => props.spacing};
  font-family: ${(props) => props.fontfam};
  font-weight: ${(props) => (props.bolder ? 'bolder' : 'normal')};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
  text-transform: ${(props) => props.upper && 'uppercase'};
  }
`;
