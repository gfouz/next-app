import * as React from "react";
import styled from "styled-components";

interface IAnchor {
  tip?: string;
  size?: string;
  href: string;
  font?: string;
  color?: string;
  uppercase?: boolean;
  children: React.ReactNode;
}

const WebLink = (props: IAnchor) => {
  return <Anchor {...props}>{props.children}</Anchor>;
};

export default WebLink;

const Anchor = styled.a<IAnchor>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.font};
  text-decoration: none;
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "normal")};
`;
