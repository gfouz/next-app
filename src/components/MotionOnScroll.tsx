import React from "react";
import styled, { css } from "styled-components";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const column = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface IProps {
  width?: string;
  height?: string;
  column?: boolean;
  overflow?: string;
  children?: React.ReactNode;
  variants?: Variants | undefined;
}

const MotionOnScroll = (props: IProps) => {
  const { children, variants, width, column } = props;
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <StyledBox
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={control}
      width={width}
      column={column}
    >
      {children}
    </StyledBox>
  );
};

export default MotionOnScroll;

const StyledBox = styled(motion.div).attrs({
  className: "MotionOnScroll",
})<IProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  overflow: ${(props) => props.overflow};
  display: flex;
  justify-content: center;
  ${(props) => props.column && column};
`;
