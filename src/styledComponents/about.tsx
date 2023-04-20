import styled from 'styled-components';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { AnimatedContainer, AnimatedButton } from 'components/FramerMotions';


export const AboutContainer = styled.div`
  background-color: #1b1f22;
  @font-face {
    font-family: 'insomnia';
    src: local('insomnia'), url('./fonts/insomnia.ttf') format('truetype');
    font-weight: bolder;
    font-display: block;
  }
  display: grid;
  grid-template-areas:
    'header'
    'main'
    'aside'
    'footer';
  grid-template-columns: 1fr;

  @media (min-width: 750px) {
    & {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas:
        'header  header  header'
        'main    main    aside'
        'footer  footer  footer';
    }
  }
  .red {
    background-image: linear-gradient(90deg, #200122 0%, #6f0000 100%);
  }
  .blue {
    background-image: linear-gradient(90deg, #20002c 0%, #cbb4d4 100%);
  }
  .black {
    background-image: linear-gradient(90deg, #304352 0%, #d7d2cc 100%);
  }
  .yellow {
    color: #ffffff;
    background-image: linear-gradient(90deg, #ba8b02 0%, #181818 100%);
  }
  .green {
    background-image: linear-gradient(90deg, #34e89e 0%, #0f3443 100%);
  }
  .gradient {
    background-image: linear-gradient(90deg, #000046 0%, #1cb5e0 100%);
  }
`;
export const AboutHeader = styled( Header )`
  padding: 1.3em;
`;
export const AboutMain = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PrimaryTitle = styled.h1`
  position: relative;
  color: #444444;
  font-family: calibri;
  font-size: 1.3em;
  letter-spacing: 5px;
  bottom: 0.2em;
  @media (min-width: 500px) {
    font-size: 1.5em;
  }
`;
export const SecondaryTitle = styled( PrimaryTitle )`
  color: #ffffff;
`;
export const PrimaryParagraph = styled.p`
  color: #444444;
  font-weight: 550;
  max-width: 600px;
  text-align: justify;
  font-family: calibri;
  letter-spacing: 1.5px;
`;
export const SecondaryParagraph = styled( PrimaryParagraph )`
  color: #f1f1f1;
`;
export const DownloadButton = styled( AnimatedButton )`
  color: #222222;
  width: 120px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  font-family: calibri;
  letter-spacing: 2px;
  border: none;
  border-radius: 10px;
  outline: none;
  z-index: 10;
  background-color: #f1f1f1;
  box-shadow: 1px 1px 10px #000000;
`;
export const AnimatedBox = styled( AnimatedContainer )`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

export const Es6LiteralString = styled.p`
  text-align: left;
  a {
    font-family: calibri;
    color: #008394;
    &:hover {
      color: #ff0000;
    }
  }
`;
export const PictureContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AbsoluteContainer = styled.article`
  position: absolute;
  padding: 0 1em;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const SecondaryArticle = styled( AbsoluteContainer )`
  justify-content: space-evenly;
`;
export const SecondaryPictureContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SecondaryPicture = styled.img.attrs({
  src: './images/grass.jpg',
  alt: 'forReact',
})`
  max-width: 100%;
  height: auto;
`;
export const SidebarPicture = styled.img.attrs({
  src: './images/greenwhite.jpg',
  alt: 'laptop',
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const SidebarAvatar = styled.img.attrs({
  src: './images/gfouz2.png',
  alt: 'gfouz',
})`
  max-width: 100%;
  height: auto;
  float: left;
  margin: -5px 5px;
`;

export const ProfileCard = styled.div`
  text-align: left;
  color: #555555;
  border: none;
  max-width: 600px;
  padding: 1em;
  min-width: 320px;
  font-weight: bolder;
  font-family: calibri;
  background-color: #efece7;
`;
export const RemoteLinks = styled.div`
  width: 100%;
  padding: 3em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: signika;
  background-color: #efece7;
`;
export const YoutubeLink = styled.a.attrs({
  href: 'https://youtube.com/@giovanifouz5033',
})`
  margin: 0 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #444444;
  font-weight: bolder;
`;
export const GithubLink = styled.a.attrs({ href: 'https://github.com/gfouz' })`
  margin: 0 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #444444;
  font-weight: bolder;
`;
export const FixedContainer = styled.div`
 position: fixed;
 bottom: 3.5em;
 width: 150px;
 height: 150px;
`;
export const AsideImage = styled.img.attrs({
  alt:"asideImage"
})`
 width: 150px;
 height: 150px;
 object-fit: fill;
`;
export const AboutFooter = styled( Footer )`

`;