import styled from 'styled-components';

interface IProps {
  color?: string;
  m?: string;
  size?: string;
  upper?: boolean;
  italic?: boolean;
  children: React.ReactNode;
}

const Text = (props: IProps) => {
  return <StyledHighlighter {...props}>{props.children}</StyledHighlighter>;
};

const StyledHighlighter = styled.span<IProps>`
  color: ${(props) => props.color || '#888888'};
  margin: ${(props) => props.m};
  font-size: ${(props) => props.size};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
  font-weight: bolder;
  text-transform: ${(props) => props.upper && 'uppercase'};
`;

export default Text;
