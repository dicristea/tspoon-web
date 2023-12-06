import { css } from '@linaria/atomic';
import logo from '../../assets/logo/App Icon_Trans.svg';

import { BodyText, Heading2, Section, placeholderImage } from '../../styles/styles';
import { BLACK, WHITE } from '../../styles/colors';
import Header from '../general/Header';
import Footer from '../general/Footer';
import DownloadSection from '../general/DownloadSection';

export default function Contact() {
  return (
    <div>
      <Header className={fontColorWhite} page="Contact" />
      <Section className={fontColorBlack}>
        <div>
          <img alt="placeholder 1" className={placeholderImage} src={logo} />
        </div>{' '}
        <div>
          <Heading2>Contact us</Heading2>
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
