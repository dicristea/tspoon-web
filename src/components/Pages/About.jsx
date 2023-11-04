import { css } from '@linaria/atomic';
import android from '../../assets/android.png';

import { BodyText, Heading2, Section } from '../../styles/styles';
import { BLACK, WHITE } from '../../styles/colors';
import NavBar from '../general/NavBar';
import Header from '../general/Header';
import Footer from '../general/Footer';
import DownloadSection from '../general/DownloadSection';

export default function About() {
  return (
    <div>
      <NavBar />
      <Header className={fontColorWhite} page="About" />
      <Section className={fontColorBlack}>
        <div>
          <img alt="placeholder 1" src={android} />
        </div>
        <div>
          <Heading2>Why do we do this?</Heading2>
          <BodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </BodyText>
        </div>
      </Section>
      <DownloadSection />
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
