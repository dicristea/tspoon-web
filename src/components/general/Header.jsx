import { styled } from '@linaria/react';
import { useContext } from 'react';
import { css } from '@linaria/core';
import {
  AnchorTag,
  Button,
  GreenBackground,
  Title,
  horizontalPadding,
  pinkButton
} from '../../styles/styles';
import android from '../../assets/icons/android.png';
import { WHITE } from '../../styles/colors';
import { AppContext } from '../../utils/context';
import RandomCharacter1 from '../../assets/artwork/RandomChar_1.svg';
import RandomCharacter2 from '../../assets/artwork/RandomChar_2.svg';
import RandomCharacter3 from '../../assets/artwork/RandomChar_3.svg';
import RandomCharacter4 from '../../assets/artwork/RandomChar_4.svg';
import Paul from '../../assets/artwork/Paul.svg';
import Andrew from '../../assets/artwork/Andrew.svg';
import Forest from '../../assets/artwork/Forest.svg';
import Diana from '../../assets/artwork/Diana.svg';
import useScreenSize from '../../utils/useScreenSize';
import NavBar from './NavBar';

export default function Header({ page }) {
  const { LAUCH_LIVE } = useContext(AppContext);
  const screenSize = useScreenSize();

  switch (page) {
    case 'Title': {
      return (
        <div className={fullPage} style={{ height: screenSize.height }}>
          <NavBar />
          <HeaderDiv className={GreenBackground}>
            {/* <TitleSection> */}
            {screenSize.width > 800 ? (
              <TitleImages>
                <img alt="logo" src={RandomCharacter1} />
                <img alt="logo" src={RandomCharacter2} />
              </TitleImages>
            ) : (
              <div />
            )}
            <MiddleTitleSection
              style={
                screenSize.width < 800 && screenSize.height > 890 ? { paddingTop: '15vh' } : null
              }
            >
              <Title>
                No <br />
                Nameless <br />
                Chefs
              </Title>
              <div>
                {LAUCH_LIVE ? (
                  <>
                    <Button>Download iOS</Button>
                    <Button>
                      Downloads
                      <img alt="android logo" src={android} />
                    </Button>
                  </>
                ) : (
                  <AnchorTag href="#waitlist">
                    <Button className={pinkButton}>JOIN THE WAITLIST</Button>
                  </AnchorTag>
                )}
              </div>
            </MiddleTitleSection>
            <TitleImages>
              {screenSize.width < 800 ? <img alt="logo" src={RandomCharacter1} /> : null}
              <img alt="logo" src={RandomCharacter3} />
              <img alt="logo" src={RandomCharacter4} />
            </TitleImages>
            {/* </TitleSection> */}
          </HeaderDiv>
        </div>
      );
    }
    case 'About': {
      return (
        <div className={fullPage} style={{ height: screenSize.height }}>
          <NavBar />
          <AboutHeader>
            <Title>Made by nameless chefs.</Title>
            <TitleImages>
              <img alt="logo" src={Paul} />
              <img alt="logo" src={Andrew} />
              <img alt="logo" src={Forest} />
              <img alt="logo" src={Diana} />
            </TitleImages>
          </AboutHeader>
        </div>
      );
    }
    case 'Contact': {
      return (
        <>
          <NavBar />
          <ContactHeaderDiv>
            <Title className={contactTitle}>What&apos;s cooking Chef?</Title>
          </ContactHeaderDiv>
        </>
      );
    }
    default:
      return null;
  }
}
const fullPage = css`
  display: flex;
  flex-direction: column;
`;

const HeaderDiv = styled.header`
  color: ${WHITE};
  padding-left: ${horizontalPadding};
  padding-right: ${horizontalPadding};
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  gap: 0;
  div {
    gap: 4vw;
    img {
      width: 130px;
      height: auto;
    }
  }
  div:nth-child(2) {
    cursor: pointer;
    opacity: 0;
    animation: fadeInAnimation ease 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: both;
    animation-delay: 200ms;
    @keyframes fadeInAnimation {
      0% {
        opacity: 0;
        filter: blur(5px);
        transform: translateY(15%);
      }
      100% {
        opacity: 1;
        filter: blur(0);
        transform: translateY(0);
      }
    }
  }
  div:nth-child(1),
  div:nth-child(3) {
    opacity: 0;
    animation: fadeInAnimation ease 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    @keyframes fadeInAnimation {
      0% {
        opacity: 0;
        filter: blur(5px);
        transform: translateY(15%);
      }
      100% {
        opacity: 1;
        filter: blur(0);
        transform: translateY(0);
      }
    }
  }

  @media (max-width: 1000px) {
    div {
      gap: 2rem;
      img {
        width: 100px;
        height: auto;
      }
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    div {
      gap: 2rem;
      img {
        width: 90px;
        height: auto;
      }
    }
  }

  @media (max-width: 450px) {
    div {
      gap: 1rem;
      img {
        width: 80px;
        height: auto;
      }
    }
  }
`;

// const TitleSection = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   height: 100%;
//   gap: 0;
//   div {
//     gap: 4vw;
//     img {
//       width: 130px;
//       height: auto;
//     }
//   }

//   @media (max-width: 1000px) {
//     div {
//       gap: 2rem;
//       img {
//         width: 100px;
//         height: auto;
//       }
//     }
//   }

//   @media (max-width: 800px) {
//     flex-direction: column;
//     align-items: center;
//     div {
//       gap: 2rem;
//       img {
//         width: 90px;
//         height: auto;
//       }
//     }
//   }

//   @media (max-width: 450px) {
//     div {
//       gap: 1rem;
//       img {
//         width: 80px;
//         height: auto;
//       }
//     }
//   }

//   @media (min-width: 1000px) {
//     gap: 4vw;
//   }
// `;

const MiddleTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  @media (max-width: 800px) {
    padding-bottom: 1rem;
    padding-top: 1rem;
  }
  @media (max-width: 800px) {
    padding-bottom: 1rem;
    padding-top: 1rem;
  }
`;

const TitleImages = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
`;

const AboutHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: ${WHITE};
  gap: 20vh;
  height: 100%;
  div {
    gap: 2vw;
    h1 {
      margin: 0;
    }
    img {
      width: 150px;
      height: auto;
    }
  }
  @media (min-width: 550px) {
    div {
      gap: 2vw;
      img {
        width: 120px;
        height: auto;
      }
    }
  }
  @media (max-width: 550px) {
    div {
      gap: 2vw;
      img {
        width: 80px;
        height: auto;
      }
    }
  }
  opacity: 0;
  animation: fadeInAnimation ease 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  animation-delay: 200ms;
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
      filter: blur(5px);
      transform: translateY(15%);
    }
    100% {
      opacity: 1;
      filter: blur(0);
      transform: translateY(0);
    }
  }
`;

const contactTitle = css`
  @media (min-width: 1200px) {
    font-size: 50pt;
    line-height: 6rem;
  }
  @media (min-width: 800px) {
    font-size: 40pt;
    line-height: 6rem;
  }
  @media (max-width: 800px) {
    font-size: 35pt;
    line-height: 5rem;
  }
`;

const ContactHeaderDiv = styled(HeaderDiv)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 45vh;
  h1 {
    opacity: 0;
    animation: fadeInAnimation ease 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    @keyframes fadeInAnimation {
      0% {
        opacity: 0;
        transform: translateY(70%);
        filter: blur(5px);
      }
      100% {
        opacity: 1;
        filter: blur(0);
        transform: translateY(0);
      }
    }
  }
`;
