import React from "react";
import styled, { css } from "styled-components";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const column = css`
  flex-direction: column;
`;
interface Iprops {
  children: React.ReactNode;
  column?: boolean;
  variants?: Variants | undefined;
}

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 0 },
};

const OnScrollMotion = (props: Iprops) => {
  const { children, variants, column } = props;
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
      className="box"
      ref={ref}
      column={column}
      variants={variants || boxVariant}
      initial="hidden"
      animate={control}
    >
      {children}
    </StyledBox>
  );
};

export default OnScrollMotion;

const StyledBox = styled(motion.div)<Iprops>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.column && column};
`;
