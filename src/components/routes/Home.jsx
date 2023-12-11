import { css } from '@linaria/atomic';
import {
  BodyText,
  Heading3,
  Section,
  h3PaddingBottom,
  placeholderImage,
  textPaddingBottom
} from '../../styles/styles';
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
          <Heading3 className={h3PaddingBottom}>Chef, build your name.</Heading3>
          <BodyText className={textPaddingBottom}>
            No nameless Chefs means we want to give the power to every Chef whose cooking
            masterpieces go unnoticed and consumed too fast.
          </BodyText>
          <BodyText className={textPaddingBottom}>
            tspoon is where Chefs can build their brand and share their creations with loved ones
            near and far.
          </BodyText>
        </div>
      </Section>
      <Section>
        <div className={itemA}>
          <Heading3 className={h3PaddingBottom}>Where your next dinner plans are found.</Heading3>
          <BodyText>Date night? Parents coming into town?</BodyText>
          <BodyText className={textPaddingBottom}>Housewarming party?</BodyText>
          <BodyText className={textPaddingBottom}>
            Find plans for your next meal, and cook easily and efficiently with easy to navigate
            instructions for a hassle-free cooking process.
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

const fontColorWhite = css`
  color: ${WHITE};
`;

const fontColorBlack = css`
  color: ${BLACK};
`;

const itemA = css`
  text-align: right;
  @media (max-width: 700px) {
    grid-row-start: 2;
    grid-row-end: 3;
    text-align: left;
  }
`;
