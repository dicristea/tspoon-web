import { css } from '@linaria/core';

import { useRef } from 'react';
import { styled } from '@linaria/react';
import {
  BodyText,
  Heading2,
  Section,
  h3PaddingBottom,
  normalImageSize,
  textPaddingBottom
} from '../../styles/styles';
import Header from '../general/Header';
import Footer from '../general/Footer';
import TracysKitchen from '../../assets/artwork/AboutUs_Block.svg';
import DownloadSection from '../general/DownloadSection';
import ScrollToTop from '../../utils/ScrollToTop';
import HomeAnimation from '../../assets/HomeFeedAnimation.gif';
import DirectoryCard from '../general/DirectoryCard';
import { GRAY } from '../../styles/colors';
import { HomeSection } from './Home';

export default function About() {
  const signUpRef = useRef();

  return (
    <>
      <ScrollToTop />
      <Header page="About" signUpRef={signUpRef} />
      <HomeSection>
        <div>
          <Heading2 className={h3PaddingBottom}>What is Tspoon?</Heading2>
          <BodyText className={textPaddingBottom}>
            Tspoon is the platform where home chefs can essentially develop their “portfolio” of
            recipes. After all, you are what you eat and love to cook. Tspoon makes it easy to
            store, organize, and share those recipes with your friends.
          </BodyText>
          <BodyText className={textPaddingBottom}>
            It&apos;s also where you expand your experience as a Chef. Find new recipes, cook with
            your friends, and develop your techniques to become to best version of yourself that you
            can be.
          </BodyText>
          <DownloadSection />
        </div>
        <div>
          <img alt="App Animation" className={normalImageSize} src={HomeAnimation} />
        </div>
        <div>
          <Heading2 className={h3PaddingBottom}>Why do we cook?</Heading2>
          <BodyText className={textPaddingBottom}>
            <b>Andrew</b>: My mom used to have a magnet on our fridge, just a souvenir piece from
            her trip to Hawaii. As novelty as the item is, every time I walked into Tracy&apos;s
            Kitchen I knew that I would be in for a treat, something always with a creative twist.
            So, my mom cooks amazing food, but she does not go forth into the world as a Chef. Thus,
            she remains nameless.
          </BodyText>
          <BodyText className={textPaddingBottom}>
            We here at Tspoon wonder how many other Chefs might be going nameless in the world.
            Whether your recipe is inspiring or inspired, it will find a home on Tspoon and find its
            way to another.
          </BodyText>
        </div>
        <div>
          <img alt="Tracy's Kitchen" className={tracyskitchen} src={TracysKitchen} />
        </div>
      </HomeSection>
      <CardSection>
        <Heading2 className={h3PaddingBottom}>Who are we?</Heading2>
        <CardsContainer>
          <DirectoryCard name="Andrew" />
          <DirectoryCard name="Forest" />
          <DirectoryCard name="Diana" />
          <DirectoryCard name="Pauline" />
        </CardsContainer>
      </CardSection>
      <Section>
        <DownloadSection />
      </Section>
      <div ref={signUpRef}>
        <Footer />
      </div>
    </>
  );
}

const tracyskitchen = css`
  height: auto;
  width: 300px;
`;

const CardSection = styled.div`
  background-color: ${GRAY};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  padding: 0 15vw 4rem 15vw;
`;

const CardsContainer = styled.div`
  display: grid;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;
