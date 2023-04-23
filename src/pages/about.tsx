import { useState, useEffect } from "react";
import styled from "styled-components";
import * as S from "styles/about";
import { useSnapshot } from "valtio";
import { useScroll, useMotionValueEvent } from "framer-motion";

import { switcher } from "components/store";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { Aside } from "components/Aside";
import Sidebar from "components/Sidebar";
import Button from "components/Button";
import Cube3d from "components/Cube3D";
import NextHead from "components/NextHead";
import { Headline } from "components/Headline";
import OnScrollMotion from "components/OnScrollMotion";
import MotionOnScroll from "components/MotionOnScroll";
import LayersContainer from "components/LayersContainer";
import { AnimatedContainer, AnimatedButton } from "components/FramerMotions";

import GitAlt from "icons/GitAlt";
import Youtube from "icons/Youtube";

import { Routes } from "components/Routes";
import { fetchPdf } from "constants/about";
import { reactVariant } from "constants/about";
import { spin1, spin2, spin3, spin4, spin5, spin6 } from "constants/about";
import {
  attached_1,
  attached_2,
  experience,
  about_react,
  about_express,
} from "constants/about";

export default function About() {
  //const isMobile = useMediaQuery('(max-width: 450px)');
  const [position, setPosition] = useState(0);
  const [degree, setDegree] = useState(spin1);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setPosition(latest);
    console.log("Page scroll: ", latest);
  });

  const snap2 = useSnapshot(switcher);
  const { st, reverse } = snap2;

  const [show, setShow] = useState(false);

  const handleClick = () => {
    fetchPdf();
  };
  useEffect(() => {
    position > 80 && position < 700 && setDegree(spin2);
    position > 700 && position < 800 && setDegree(spin3);
    position > 800 && position < 900 && setDegree(spin4);
    position > 900 && position < 1000 && setDegree(spin5);
    position > 1000 && position < 1200 && setDegree(spin6);
  }, [position]);
  return (
    <>
      <Sidebar options={Routes} />
      <S.AboutContainer>
        <NextHead title="about fouz Js portfolio" />
        <S.AboutHeader bg="#232323" color="#ffffff">
          gfouz-{new Date().getFullYear()}
          <Button st={st} reverse={reverse} />
        </S.AboutHeader>

        <S.AboutMain>
          <LayersContainer image="sun.jpg"></LayersContainer>
          <S.SecondaryPictureContainer>
            <S.SecondaryPicture />
            <S.SecondaryArticle>
            <S.HalfHeightSection>
              <MotionOnScroll variants={reactVariant} column>
                <S.PrimaryTitle>React JS</S.PrimaryTitle>
                <S.PrimaryParagraph
                  dangerouslySetInnerHTML={{ __html: about_react }}
                ></S.PrimaryParagraph>
              </MotionOnScroll>
            </S.HalfHeightSection>  
            <S.HalfHeightSection>
              <OnScrollMotion column>
                <S.SecondaryTitle>Express JS</S.SecondaryTitle>
                <S.SecondaryParagraph
                  dangerouslySetInnerHTML={{ __html: about_express }}
                ></S.SecondaryParagraph>
              </OnScrollMotion>
            </S.HalfHeightSection>  
            </S.SecondaryArticle>
          </S.SecondaryPictureContainer>
        </S.AboutMain>

        <Aside bg="#efece7">
          <S.PictureContainer>
            <S.AbsoluteContainer>
              <S.DownloadButton
                transition={{ duration: 2.5, delay: 2 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{
                  color: "#ffffff",
                  backgroundColor: "#307801",
                  transition: { duration: 0.2 },
                }}
                onClick={handleClick}
                onMouseEnter={() => {
                  setShow(true);
                }}
                onMouseLeave={() => {
                  setShow(false);
                }}
              >
                {show ? "download" : "curriculum"}
              </S.DownloadButton>
            </S.AbsoluteContainer>
            <S.AnimatedBox
              initial={{}}
              animate={{ rotateX: [180, 360] }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <S.SidebarPicture />
            </S.AnimatedBox>
          </S.PictureContainer>
          <S.ProfileCard>
            <Headline upper bolder>
              Overview
            </Headline>
            <p> {attached_1} </p>
          </S.ProfileCard>

          <S.ProfileCard>
            <S.SidebarAvatar />
            <p> {attached_2} </p>
          </S.ProfileCard>
          <S.RemoteLinks>
            <S.YoutubeLink>
              YouTube Channel
              <Youtube fontSize="30px" color="#c40550" />
            </S.YoutubeLink>
            <S.GithubLink>
              Github Projects
              <GitAlt fontSize="30px" color="#222222" />
            </S.GithubLink>
          </S.RemoteLinks>
        </Aside>

        <Footer bg="#232323" color="#c2c5aa">
          Portfolio &copy; {new Date().getFullYear()}
        </Footer>
      </S.AboutContainer>
    </>
  );
}

