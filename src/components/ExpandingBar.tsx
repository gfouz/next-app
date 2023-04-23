import styled from "styled-components";
import { growing_height, growing_weights } from "./constants";

const ExpandingBar = () => {
  return (
    <BarContainer>
      <GrowingBar>
        <Square></Square>
        <Rectangle>Fullstack</Rectangle>
      </GrowingBar>
    </BarContainer>
  );
};
export default ExpandingBar;

const BarContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 30%;
  & {
    @media (min-width: 500px) {
      left: 2em;
    }
  }
`;
const GrowingBar = styled.div`
  display: flex;
`;
const Square = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${growing_height} 6s;
  animation-fill-mode: forwards;
  background-color: #ffffff;
`;
const Rectangle = styled.div`
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  width: 60px;
  height: 60px;
  color: #222222;
  font-weight: bolder;
  background-color: #ffffff;
  animation: ${growing_weights} 4s;
  animation-fill-mode: forwards;
  animation-delay: 1.7s;
`;
