import { css } from '@linaria/atomic';
import logo from '../../assets/logo/App Icon_Trans.svg';

import sStyles, { BodyText, Heading2, Section, placeholderImage } from '../../styles/styles';
import { BLACK, WHITE } from '../../styles/colors';
import Header from '../general/Header';
import Footer from '../general/Footer';
import DownloadSection from '../general/DownloadSection';

export default function Blog() {
  return (
    <div>
      <Header className={fontColorWhite} page="Blog" />
      <Section className={fontColorBlack}>
        <div className={blogCard}>
          <Heading2>Blog Post 1</Heading2>
          <div>
            <img alt="placeholder 1" className={placeholderImage} src={logo} />
          </div>
          <BodyText style={sStyles.textAlignCenter}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </BodyText>
        </div>
        <div className={blogCard}>
          <Heading2>Blog Post 2</Heading2>
          <div>
            <img alt="placeholder 1" className={placeholderImage} src={logo} />
          </div>
          <BodyText style={sStyles.textAlignCenter}>
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

const blogCard = css`
  ${sStyles.flexColumnCenter}
  ${sStyles.gap30}
`;

const fontColorWhite = css`
  color: ${WHITE};
`;

const fontColorBlack = css`
  color: ${BLACK};
`;
