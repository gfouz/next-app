import styled from "styled-components";
import { motion } from "framer-motion";

interface ITypeWriter {
  p?: string;
  m?: string;
  size?: string;
  text?: string;
  color?: string;
  align?: string;
  shadow?: boolean;
  fontfam?: string;
}

export const TypeWriter = styled(motion.div)`
  width: 100%;
  color: ${(props: ITypeWriter) => props.color};
  font-weight: bolder;
  font-size: ${(props: ITypeWriter) => props.size};
  text-transform: uppercase;
  text-align: ${(props: ITypeWriter) => props.align || "center"};
  padding: ${(props: ITypeWriter) => props.p};
  margin: ${(props: ITypeWriter) => props.m};

  p,
  h1,
  h2,
  h3,
  h4 {
    overflow: hidden;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.15em; /* Adjust as needed */
    animation: typing 2s steps(40, end);
    font-family: ${(props) => props.fontfam};
    text-shadow: ${(props) => (props.shadow ? "10px 1px 10px #000000" : "")};
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;
