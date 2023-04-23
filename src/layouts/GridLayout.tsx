import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'main'
    'aside'
    'footer';
  grid-template-columns: 1fr;

  @media (min-width: 500px) {
  .& {
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      "header  header"
      "nav     nav"
      "main    aside"
      "footer  footer";
  }
  @media (min-width: 750px) {
    & {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas:
        'header  header  header'
        'main    main    aside'
        'footer  footer  footer';
    }
  }
  
`;
