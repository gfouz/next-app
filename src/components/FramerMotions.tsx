import { motion } from "framer-motion";
import styled from "styled-components";

interface IHeadings {
  color?: string;
  width?: string;
  uppercase?: boolean;
}
export const Span = styled(motion.span)<IHeadings>`
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  text-transform: ${(props) => props.uppercase && "uppercase"};
`;
export const Subtitle = styled(motion.h1)<IHeadings>`
  color: ${(props) => props.color};
  width: ${(props) => props.width || "fit-content"};
  text-transform: ${(props) => props.uppercase && "uppercase"};
`;
export const Paragraph = styled(motion.p)``;
export const FramerMotionContainer = styled(motion.div)``;
export const AnimatedContainer = styled(motion.div)``;
export const AnimatedButton = styled(motion.button)`
  cursor: pointer;
  border: none;
  outline: none;
`;
export const Picture = styled(motion.img)``;
//font-family: source code pro black, segoe ui black, signika, source serif pro black;
