import styled from "styled-components";
import { useSnapshot } from "valtio";
import { switcher } from "components/store";

import Sidebar from "components/Sidebar";
import Button from "components/Button";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { Routes } from "components/Routes";


function FlexLayout({ children }) {
  const snap2 = useSnapshot(switcher);
  const { st, reverse } = snap2;
  return (
    <FlexContainer>
      <Sidebar options={Routes} />
      <FlexHeader bg="#232323" color="#ffffff">
        gfouz-{new Date().getFullYear()}
        <Button st={st} reverse={reverse} />
      </FlexHeader>
      <FlexMainContainer>
         {children}
      </FlexMainContainer>
      <FlexFooter>Portfolio &copy; {new Date().getFullYear()}</FlexFooter>
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 100%;
  section {
    width: 100%;
  }
  section {
    display: flex;
    @media ( max-width: 650px ){
      flex-direction: column;
    }
  }
  article {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
    width: 50%;
  }
  @media (max-width: 650px) {
    article {
      width: 100%;
    }
  }
`;
const FlexHeader = styled(Header)`
 padding: 1.3em;
`;
const FlexFooter = styled(Footer)`
  padding: 1.3em;
`;
const FlexMainContainer = styled.div`
  min-height: calc( 100vh - 120px );

`;
export default FlexLayout;
