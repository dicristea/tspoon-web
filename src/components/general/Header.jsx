import { styled } from '@linaria/react';
import { useContext } from 'react';
import { css } from '@linaria/core';
import {
  AnchorTag,
  Button,
  GreenBackground,
  PinkBackground,
  Title,
  greenButton,
  horizontalPadding
} from '../../styles/styles';
import android from '../../assets/android.png';
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
        <div className={fullPage}>
          <NavBar />
          <HeaderDiv className={PinkBackground}>
            <TitleSection>
              {screenSize.width > 850 ? (
                <TitleImages>
                  <img alt="logo" src={RandomCharacter1} />
                  <img alt="logo" src={RandomCharacter2} />
                </TitleImages>
              ) : null}
              <MiddleTitleSection
                style={
                  screenSize.width < 850 && screenSize.height > 750 ? { paddingTop: '15vh' } : null
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
                      <Button className={greenButton}>JOIN THE WAITLIST</Button>
                    </AnchorTag>
                  )}
                </div>
              </MiddleTitleSection>
              <TitleImages>
                {screenSize.width < 850 ? <img alt="logo" src={RandomCharacter1} /> : null}
                <img alt="logo" src={RandomCharacter3} />
                <img alt="logo" src={RandomCharacter4} />
              </TitleImages>
            </TitleSection>
          </HeaderDiv>
        </div>
      );
    }
    case 'About': {
      return (
        <div className={fullPage}>
          <NavBar greenColor />
          <HeaderDiv className={GreenBackground}>
            <AboutTitleSection>
              <Title>Made by nameless chefs.</Title>
              <TitleImages>
                <img alt="logo" src={Paul} />
                <img alt="logo" src={Andrew} />
                <img alt="logo" src={Forest} />
                <img alt="logo" src={Diana} />
              </TitleImages>
            </AboutTitleSection>
          </HeaderDiv>
        </div>
      );
    }
    case 'Blog': {
      return (
        <div className={fullPage}>
          <NavBar />
          <HeaderDiv>
            <TitleSection>
              <Title>Blog.</Title>
            </TitleSection>
          </HeaderDiv>
        </div>
      );
    }
    case 'Contact': {
      return (
        <>
          <NavBar />
          <ContactHeaderDiv className={PinkBackground}>
            <Title className={contactTitle}>What&apos;s cookin&apos; Chef?</Title>
          </ContactHeaderDiv>
        </>
      );
    }
    default:
      return null;
  }
}

const fullPage = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    height: 92vh;
  }
`;

const HeaderDiv = styled.header`
  color: ${WHITE};
  padding-left: ${horizontalPadding};
  padding-right: ${horizontalPadding};
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  justify-content: center;
`;

const contactTitle = css`
  @media (max-width: 1400px) {
    font-size: 50pt;
    line-height: 6rem;
  }
  @media (max-width: 1200px) {
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
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  gap: 4vw;
  div {
    gap: 4vw;
    img {
      width: 130px;
      height: auto;
    }
  }

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    div {
      gap: 2rem;
      img {
        width: 100px;
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
`;

const AboutTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
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
  @media (max-width: 800px) {
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
`;

const TitleImages = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
`;
