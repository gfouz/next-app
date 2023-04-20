import styled from 'styled-components';
import { Footer } from 'components/Footer';
import AllLinks, { SimpleNavbar } from 'components/SimpleNavbar';
import { Paragraph, FramerMotionContainer, Picture } from 'components/FramerMotions';

export const HomepageContainer = styled.div`
  @font-face {
    font-family: 'insomnia';
    src: local('insomnia'), url('./fonts/insomnia.ttf') format('truetype');
    font-weight: bolder;
    font-display: block;
  }
  width: 100%;
  img {
    max-width: 100%;
    height: auto;
  }
`;
export const LogoContainer = styled.div`
  position: absolute;
  top: 2em;
  left: 2em;
`;
export const AutoNavbar = styled.div`
  font-weight: bolder;
  color: #f2f2f2;
  letter-spacing: 2px;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  background-color: #14191f;
  background-color: #0a0501;
  justify-content: space-evenly;
`;
export const Navbar = styled(SimpleNavbar)``;

export const PrimaryArticle = styled.article`
  display: flex;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
export const SecondaryArticle = styled(PrimaryArticle)`
  @media (max-width: 749px) {
    flex-direction: column-reverse;
  }
`;
export const ParagraphContainer = styled.article.attrs({
  className: 'ParagraphContainer',
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #555555;
  font-weight: bolder;
  font-family: calibri;
  padding: 1em;
  width: 100%;
  @media (min-width: 750px) {
    width: 50%;
  }
  @media (min-width: 900px) {
    padding: 2em 3.5em;
  }
`;
export const FirstParagraph = styled(Paragraph)`
  text-align: left;
  color: #444444;
  max-width: 600px;
  padding: 2em 0;
  a {
    color: #008394;
    margin: 0 0.5em;
    &:hover {
      color: #b8d348;
    }
  }
`;
export const SecondParagraph = styled(FirstParagraph)``;
export const FinalParagraph = styled(FirstParagraph)`
  color: #ffffff;
`;
export const PictureContainer = styled.div`
  width: 100%;
  overflow: hidden;
  @media (min-width: 750px) {
    width: 50%;
  }
`;
export const MainTitleContainer = styled(FramerMotionContainer)`
  text-align: center;
`;
export const MainTitle = styled.img.attrs({
  src: './images/fouz4.png',
  alt: 'maintitle',
})`
  width: 45%;
  height: auto;
  margin: 1em 0;
`;

export const PrimaryPictureContainer = styled.div`
  width: 100%;
  overflow: hidden;
  @media (min-width: 750px) {
    width: 50%;
  }
`;
export const PrimaryPicture = styled( Picture ).attrs({
  src: './images/bluemount.jpg',
  alt: 'Primary',
})`
  transition: all 3s linear;
`;

export const NodeJsLogo = styled.img.attrs({
  src: './images/rednodejs.png',
  alt: 'NodeJs',
})`
  width: 300px;
  height: auto;
  position: relative;
  bottom: 10px;
  z-index: 3;
`;

export const HomepageFooter = styled(Footer)`
  color: #ffffff;
  background-color: #2d4d02;
`;
export const SmallText = styled.span`
  margin: 0 5px;
`;
//#8bc34a
// #EEEEEE #FFD368 #393D46 #212832

/*

 const MainTitle = styled(AnimatedText)`
  font-family: iron wall;
  font-size: 3em;
  @media (min-width: 500px) {
    font-size: 5em;
  }
`;
const MainTitle = styled(Subtitle)`
  color: #c4b7b4;
  font-family: iron wall;
  font-size: 8vw;
`;

*/

//https://gfouz.github.io/best-practices/
