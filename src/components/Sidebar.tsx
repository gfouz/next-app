import styled from "styled-components";
import Navbar from "./Navbar";
import { useSnapshot } from "valtio";
import { switcher } from "./store";
import { IRouteArray } from "./constants";

export default function Sidebar(props: IRouteArray) {
  const snap = useSnapshot(switcher);
  const { st, setFalse } = snap;

  return (
    <StyledSidebar>
      <div className={st ? "opened" : "closed"} onClick={setFalse}>
        <Navbar options={props.options} />
      </div>
    </StyledSidebar>
  );
}

const StyledSidebar = styled.nav`
  .opened {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: #00000099;
    transition: all 3s;
    transform: translateX(0);
    z-index: 10;
    width: 100%;
    @media (min-width: 600px) {
      width: 20%;
    }
  }
  .closed {
    display: none;
    transform: translateX(-40%);
  }
`;
