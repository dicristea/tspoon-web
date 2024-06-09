import { css } from '@linaria/core';

import { useRef } from 'react';
import {
  BodyText,
  Heading2,
  Section,
  h3PaddingBottom,
  textPaddingBottom
} from '../../styles/styles';
import Header from '../general/Header';
import Footer from '../general/Footer';
import TracysKitchen from '../../assets/artwork/AboutUs_Block.svg';
import DownloadSection from '../general/DownloadSection';

export default function About() {
  const signUpRef = useRef();

  return (
    <>
      <Header page="About" signUpRef={signUpRef} />
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
      <DownloadSection />
      <div ref={signUpRef}>
        <Footer />
      </div>
    </>
  );
}

const aboutContainer = css`
  padding: 4rem 0;
`;

const tracyskitchen = css`
  height: auto;
  width: 300px;
`;
