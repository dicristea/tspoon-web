import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { useRef } from 'react';
import {
  BodyText,
  Button,
  ButtonContainer,
  Heading3,
  greenButton,
  h3PaddingBottom,
  normalImageSize,
  textPaddingBottom
} from '../../styles/styles';
import { GRAY, WHITE } from '../../styles/colors';
import Header from '../general/Header';
import Footer from '../general/Footer';
import DinnerArtwork from '../../assets/artwork/Homepage_dinner.svg';
import ChefArtwork from '../../assets/artwork/Homepage_Block.svg';
import HomeAnimation from '../../assets/artwork/HomeFeedAnimation.gif';
import { redirectGooglePlay } from '../../utils/utils';

export default function Home() {
  const signUpRef = useRef();

  return (
    <div>
      <Header className={fontColorWhite} page="Title" signUpRef={signUpRef} />
      <div className={sectionBody}>
        <HomeSection>
          <div className={leftAlign}>
            <Heading3 className={h3PaddingBottom}>Where your next dinner plans are found.</Heading3>
            <BodyText>Date night? Parents coming into town?</BodyText>
            <BodyText className={textPaddingBottom}>Housewarming party?</BodyText>
            <BodyText className={textPaddingBottom}>
              Find plans for your next meal, and cook easily and efficiently with easy to navigate
              instructions for a hassle-free cooking process.
            </BodyText>
          </div>
          <div>
            <img alt="Artwork of chef" className={normalImageSize} src={DinnerArtwork} />
          </div>
          <div className={item4}>
            <img alt="Artwork of dinner" className={normalImageSize} src={ChefArtwork} />
          </div>
          <div className={item3}>
            <Heading3 className={h3PaddingBottom}>Chef, build your name.</Heading3>
            <BodyText className={textPaddingBottom}>
              No nameless Chefs means we want to give the power to every Chef whose cooking
              masterpieces go unnoticed and are consumed too fast.
            </BodyText>
            <BodyText className={textPaddingBottom}>
              Tspoon is where Chefs can build their brand and share their creations with loved ones
              near and far.
            </BodyText>
          </div>
          <div className={leftAlign}>
            <Heading3 className={h3PaddingBottom}>Share your journey.</Heading3>
            <BodyText className={textPaddingBottom}>
              Share recipes, find dinner plans, and start cooking in as few swipes as possible on
              Tspoon! Our app is designed for home chefs of any skill level to share their
              creations, grow as Chefs, and discover new, horizon-expanding recipes.
            </BodyText>
            <ButtonContainer>
              <Button className={greenButton} onClick={() => redirectGooglePlay()}>
                Start cooking on Google Play!
              </Button>
            </ButtonContainer>
          </div>
          <div>
            <img alt="App Animation" className={normalImageSize} src={HomeAnimation} />
          </div>
        </HomeSection>
      </div>
      <div ref={signUpRef}>
        <Footer />
      </div>
    </div>
  );
}

const sectionBody = css`
  background-color: ${GRAY};
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
`;

const HomeSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-content: center;
  justify-items: center;
  gap: 4rem;
  padding: 0 20vw;
  @media (max-width: 700px) {
    gap: 2rem;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

const item4 = css`
  @media (max-width: 700px) {
    grid-row: 4;
  }
`;

const item3 = css`
  @media (max-width: 700px) {
    grid-row: 3;
  }
`;

const fontColorWhite = css`
  color: ${WHITE};
`;

const leftAlign = css`
  align-items: right;
  align-self: right;
`;
