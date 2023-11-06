import { css } from '@linaria/atomic';
import { BodyText, Heading2, Section } from '../../styles/styles';
import { BLACK, WHITE } from '../../styles/colors';
import logo from '../../assets/logo/App Icon_Trans.svg';
import Header from '../general/Header';
import Footer from '../general/Footer';
import DownloadSection from '../general/DownloadSection';

export default function Home() {
  return (
    <div>
      <Header className={fontColorWhite} page="Title" />
      <Section>
        <div>
          <img alt="placeholder 1" className={placeholderImage} src={logo} />
        </div>
        <div>
          <Heading2 className={noMargin}>Functionality #1</Heading2>
          <BodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </BodyText>
        </div>
      </Section>
      <Section className={sectionTwo}>
        <div className="item-a">
          <Heading2 className={noMargin}>Functionality #2</Heading2>
          <BodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </BodyText>
        </div>
        <div className="item-b">
          <img alt="placeholder 2" className={placeholderImage} src={logo} />
        </div>
      </Section>
      <DownloadSection />
      <Footer className={fontColorBlack} />
    </div>
  );
}

const noMargin = css`
  margin: 0;
`;

const fontColorWhite = css`
  color: ${WHITE};
`;

const fontColorBlack = css`
  color: ${BLACK};
`;

const placeholderImage = css`
  border: 1px ${WHITE} solid;
  background-color: ${WHITE};
  width: 200px;
  @media (max-width: 600px) {
  }
`;

const sectionTwo = css`
  .item-a {
    @media (max-width: 600px) {
      grid-row-start: 2;
      grid-row-end: 3;
    }
  }
`;
