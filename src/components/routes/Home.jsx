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
          <Heading2 className={noMargin}>Chef, build your name.</Heading2>
          <BodyText>
            No nameless Chefs means we want to give the power to every Chef whos cooking
            masterpieces go unnoticed and consumed too fast.
            <BodyText>
              tspoon is where Chefs can build their brand and share their creations with loved ones
              near and far.
            </BodyText>
          </BodyText>
        </div>
      </Section>
      <Section className={sectionTwo}>
        <div className="item-a">
          <Heading2 className={noMargin}>Where your next dinner plans are found.</Heading2>
          <BodyText>Date night? Parents coming into town? Housewarming party?</BodyText>
          <BodyText>
            Find plans for your next meal, and cook easily and eiciently with easy to navigate
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
