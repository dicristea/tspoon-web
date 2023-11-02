import '@fontsource/source-sans-pro'; // Defaults to weight 400
import '@fontsource/source-sans-pro/400.css'; // Specify weight
import '@fontsource/source-sans-pro/400-italic.css'; // Specify weight and style
// import { cx } from '@linaria/core';
// import { css } from '@linaria/atomic';
import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import sStyles, { BodyText, Heading1, Heading2, Button, FancyButton } from './styles/styles';
import { BLACK, GRAY, PINK, WHITE } from './styles/colors';
import NavBar from './components/general/NavBar';
import Footer from './components/general/Footer';
import android from './images/android.png';

function App() {
  return (
    <AppContainer>
      <NavBar />
      <Header className={fontColorWhite}>
        <Heading1>No Nameless Chefs</Heading1>
        <div>
          <Button>Download iOS</Button>
          <Button>
            Download
            <img alt="android logo" src={android} />
          </Button>
        </div>
      </Header>
      <Section className={fontColorBlack}>
        <div>
          <img alt="placeholder 1" src={android} />
        </div>
        <div>
          <Heading2>Functionality #1</Heading2>
          <BodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </BodyText>
        </div>
      </Section>
      <Section className={fontColorBlack}>
        <div>
          <Heading2>Functionality #2</Heading2>
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
      <PinkSection>
        <Heading2>Downloads</Heading2>
        <div className={flexRow}>
          <FancyButton>Another button</FancyButton>
          <FancyButton>Success</FancyButton>
        </div>
      </PinkSection>
      <Footer className={fontColorBlack} />
    </AppContainer>
  );
}

export default App;

const flexRow = css`
  ${sStyles.flexRow}
  gap: 2vw
`;

const fontColorWhite = css`
  color: ${WHITE};
`;

const fontColorBlack = css`
  color: ${BLACK};
`;

const AppContainer = styled.div`
  margin: 0;
  background-color: ${GRAY};
  display: flex;
  flex-direction: column;
  color: white;
`;
// font-size: calc(10px + 2vmin);

const Header = styled.div`
  background-color: ${PINK};
  padding: 1.5rem 5vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  z-index: 5;
  div {
    display: flex;
    align-items: center;
    gap: 4vw;
  }
`;

const Section = styled.div`
  background-color: ${GRAY};
  color: ${BLACK};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4vw;
  padding: 10vw 10vw;
`;

const PinkSection = styled(Section)`
  background-color: ${PINK};
  flex-direction: column;
  color: ${WHITE};
`;

// const objStyle = {
//   paddingTop: '3rem'
// };

// const eleStyle = css`
//   color: red;
//   font-size: 3rem;

//   ${objStyle}

//   span {
//     color: green;
//   }

//   @media (min-width: 768px) {
//     color: violet;
//   }
//   &:hover {
//     background-color: black;
//   }
// `;
