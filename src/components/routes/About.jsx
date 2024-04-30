import { css } from '@linaria/core';

import {
  BodyText,
  Heading2,
  Section,
  h3PaddingBottom,
  textPaddingBottom
} from '../../styles/styles';
import { WHITE } from '../../styles/colors';
import Header from '../general/Header';
import Footer from '../general/Footer';
import TracysKitchen from '../../assets/artwork/AboutUs_Block.svg';

export default function About() {
  return (
    <>
      <Header className={fontColorWhite} page="About" />
      <Section className={aboutContainer}>
        <div>
          <Heading2 className={h3PaddingBottom}>Why do we cook?</Heading2>
          <BodyText className={textPaddingBottom}>
            My mom used to have a magnet on our fridge, just a souvenir piece from her trip to
            Hawaii. As novelty as the item is, every time I walked into Tracy&apos;s Kitchen I knew
            that I would be in for a treat, something always with a creative twist. So, my mom cooks
            amazing food, but she does not go forth into the world as a Chef. Thus, she remains
            nameless.
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
      </Section>
      <Footer sectionColor="green" />
    </>
  );
}

const aboutContainer = css`
  padding: 4rem 0;
`;

const tracyskitchen = css`
  height: auto;
  width: 300px;
  opacity: 0;
  animation: fadeInAnimation ease 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
      transform: translateY(70%);
      filter: blur(5px);
    }
    100% {
      opacity: 1;
      filter: blur(0);
      transform: translateY(0);
    }
  }
`;

const fontColorWhite = css`
  color: ${WHITE};
`;
