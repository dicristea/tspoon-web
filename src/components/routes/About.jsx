import { css } from '@linaria/atomic';
import android from '../../assets/android.png';

import { BodyText, Heading2, Section } from '../../styles/styles';
import { BLACK, WHITE } from '../../styles/colors';
import Header from '../general/Header';
import Footer from '../general/Footer';
import DownloadSection from '../general/DownloadSection';

export default function About() {
  return (
    <div>
      <Header className={fontColorWhite} page="About" />
      <Section className={fontColorBlack}>
        <div>
          <img alt="placeholder 1" src={android} />
        </div>
        <div>
          <Heading2>Why do we cook?</Heading2>
          <BodyText>
            My mom used to have a magnet on our fridge, just a souvenir piece from her trip to
            Hawaii. As novelty as the item is, every time I walked into Tracy’s Kitchen I knew that
            I would be in for a treat, something always with a creative twist. So, my mom cooks
            amazing food, but she does not go forth into the world as a Chef. Thus, she remains
            nameless.
          </BodyText>
          <BodyText>
            We here at tspoon wonder how many other Chefs might be going nameless in the world.
            Whether your recipe is inspiring or inspired, it will find a home on tspoon and find its
            way to another.
          </BodyText>
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
