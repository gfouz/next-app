//import { useState } from "react";
import * as S from 'styles/homepage';
import styled from 'styled-components';

import { Footer } from 'components/Footer';
import LayersContainer from 'components/LayersContainer';
import AllLinks, { SimpleNavbar } from 'components/SimpleNavbar';

import NextHead from 'components/NextHead';
import MotionOnScroll from 'components/MotionOnScroll';
import { Paragraph, FramerMotionContainer, Picture } from 'components/FramerMotions';

import Wxplorer from 'components/Wxplorer';
import SpyGlass from 'icons/SpyGlass';

import useMediaQuery from 'hooks/useMediaQuery';

import { mainTitleVariants, finalVariant, navbarVariant } from 'constants/homepage';
import { firstParagraphVariant, secondParagraphVariant } from 'constants/homepage';
import { attached_1, attached_2, attached_3, nodeJsLogoVariant } from 'constants/homepage';


function Homepage() {
  const isMobile = useMediaQuery('(max-width: 700px)');
  return (
    <>
      <S.HomepageContainer>
        <NextHead title='Fouz Portfolio made with Next Js' />
        <LayersContainer image='black.jpg' center>

        </LayersContainer>
        <MotionOnScroll variants={ navbarVariant }>
          <S.AutoNavbar>
            <Navbar>
              <AllLinks />
            </Navbar>
          </S.AutoNavbar>
        </MotionOnScroll>
        <S.PrimaryArticle>
          <S.PrimaryPictureContainer>
           
              <PrimaryPicture 
                whileInView={{ opacity: 1, transition:{ duration: 2 } }}
                initial={{ opacity: 0 }}
              />
         
          </S.PrimaryPictureContainer>
          <S.ParagraphContainer>
            <MotionOnScroll variants={firstParagraphVariant}>
              <S.FirstParagraph>
                {attached_1}
                <a href='https://github.com/gfouz/best-practices.git Portfolio 2023'>
                  Portfolio react-vite-2023
                </a>
              </S.FirstParagraph>
            </MotionOnScroll>
          </S.ParagraphContainer>
        </S.PrimaryArticle>

        <S.SecondaryArticle>
          <S.ParagraphContainer>
            <MotionOnScroll variants={secondParagraphVariant}>
              <SecondParagraph>
                {attached_2}
                <a href='https://github.com/gfouz/pki-server-2023.git'>Pki-server-2023</a>
              </SecondParagraph>
            </MotionOnScroll>
          </S.ParagraphContainer>
          <LayersContainer image='school.jpg' halfSection centerBottom>
            <MotionOnScroll variants={nodeJsLogoVariant}>
              <NodeJsLogo />
            </MotionOnScroll>
          </LayersContainer>
        </S.SecondaryArticle>
        <LayersContainer image='last.jpg' center>
          <MotionOnScroll variants={finalVariant}>
            <S.ParagraphContainer>
              <S.FinalParagraph>
                {attached_3}
                <a href='https://github.com/gfouz/pki-server-2023.git'>Pki-server-2023</a>
              </S.FinalParagraph>
            </S.ParagraphContainer>
          </MotionOnScroll>
        </LayersContainer>
        <S.HomepageFooter>
          <SmallText>gfouz</SmallText>
          {<SpyGlass fontSize='15px' color='#f2f2f2' />}
          <SmallText>portfolio</SmallText>
          {new Date().getFullYear()}
        </S.HomepageFooter>
      </S.HomepageContainer>
    </>
  );
}

export default Homepage;

const Navbar = styled(SimpleNavbar)``;

const PrimaryArticle = styled.article`
  display: flex;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
const SecondaryArticle = styled(PrimaryArticle)`
  @media (max-width: 749px) {
    flex-direction: column-reverse;
  }
`;
const ParagraphContainer = styled.article.attrs({
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
const FirstParagraph = styled(Paragraph)`
  text-align: left;
  color: #444444;
  max-width: 600px;
  a {
    color: #008394;
    margin: 0 0.5em;
    &:hover {
      color: #b8d348;
    }
  }
`;
const SecondParagraph = styled(FirstParagraph)``;
const FinalParagraph = styled(FirstParagraph)``;
const PictureContainer = styled.div`
  width: 100%;
  overflow: hidden;
  @media (min-width: 750px) {
    width: 50%;
  }
`;
const MainTitleContainer = styled(FramerMotionContainer)`
  text-align: center;
`;
const MainTitle = styled.img.attrs({
  src: './images/fouz4.png',
  alt: 'maintitle',
})`
  width: 45%;
  height: auto;
  margin: 1em 0;
`;
const PrimaryPictureContainer = styled.div`
  width: 100%;
  overflow: hidden;
  @media (min-width: 750px) {
    width: 50%;
  }
`;
const PrimaryPicture = styled( Picture ).attrs({
  src: './images/stone.jpg',
  alt: 'Primary',
})`
  
  transition: all 3s linear;
`;

const NodeJsLogo = styled.img.attrs({
  src: './images/rednodejs.png',
  alt: 'NodeJs',
})`
  width: 300px;
  height: auto;
  position: relative;
  bottom: 10px;
  z-index: 3;
`;

const HomepageFooter = styled(Footer)`
  color: #ffffff;
  background-color: #014a3c;
`;
const SmallText = styled.span`
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
