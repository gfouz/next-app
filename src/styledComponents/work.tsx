import styled from "styled-components";

export const MainSection = styled.section``;
export const PrimarySection = styled.section``;
export const SecondarySection = styled.section`
 flex-direction: row-reverse;
`;

export const PrimaryArticle = styled.article`
 padding: 6em;
 display: flex;
 align-items: center;
 justify-content: center;
`;
export const SecondaryArticle = styled(PrimaryArticle)``;
export const PictureContainer = styled.article``;
export const MainPicture = styled.img.attrs({ src:"./images/sea.jpg", alt:""})`
 max-width: 100%;
 height: auto;
`;
export const PrimarySectionPicture = styled.img.attrs({ src:"./images/next.jpg", alt:"car"})`
 width: 100%;
 height: 100%;
 object-fit: fill;
`;
export const LastPicture = styled.img.attrs({ src:"./images/express.jpg", alt:"heli"})`
 width: 100%;
 height: 100%;
 object-fit: fill;
`;
export const Paragraph = styled.p.attrs({ className:"paragraph"})`
 font-family: calibri;
`;