import { css } from '@linaria/atomic';

import {
  BodyText,
  Heading2,
  Section,
  h3PaddingBottom,
  placeholderImage,
  textPaddingBottom
} from '../../styles/styles';
import { BLACK, WHITE } from '../../styles/colors';
import Header from '../general/Header';
import Footer from '../general/Footer';
import DownloadSection from '../general/DownloadSection';
import logo from '../../assets/logo/App Icon_Trans.svg';

export default function About() {
  return (
    <div>
      <Header className={fontColorWhite} page="About" />
      <Section className={fontColorBlack}>
        <div>
          <Heading2 className={h3PaddingBottom}>Why do we cook?</Heading2>
          <BodyText className={textPaddingBottom}>
            My mom used to have a magnet on our fridge, just a souvenir piece from her trip to
            Hawaii. As novelty as the item is, every time I walked into Tracy’s Kitchen I knew that
            I would be in for a treat, something always with a creative twist. So, my mom cooks
            amazing food, but she does not go forth into the world as a Chef. Thus, she remains
            nameless.
          </BodyText>
          <BodyText className={textPaddingBottom}>
            We here at tspoon wonder how many other Chefs might be going nameless in the world.
            Whether your recipe is inspiring or inspired, it will find a home on tspoon and find its
            way to another.
          </BodyText>
        </div>
        <div>
          <img alt="placeholder 1" className={placeholderImage} src={logo} />
        </div>
      </Section>
      <DownloadSection greenColor />
      <Footer className={fontColorBlack} />
    </div>
  );
}

const fontColorWhite = css`
  color: ${WHITE};
`;

const fontColorBlack = css`
  color: ${BLACK};
`;
