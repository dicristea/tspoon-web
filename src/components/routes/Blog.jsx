import { css } from '@linaria/atomic';
import android from '../../assets/android.png';

import { BodyText, Heading2, Section } from '../../styles/styles';
import { BLACK, WHITE } from '../../styles/colors';
import Header from '../general/Header';
import Footer from '../general/Footer';
import DownloadSection from '../general/DownloadSection';

export default function Blog() {
  return (
    <div>
      <Header className={fontColorWhite} page="Blog" />
      <Section className={fontColorBlack}>
        <div>
          <Heading2>Blog</Heading2>
          <div>
            <img alt="placeholder 1" src={android} />
          </div>
          <BodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </BodyText>
        </div>
        <div>
          <img alt="placeholder 1" src={android} />
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
