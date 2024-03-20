import { styled } from '@linaria/react';
import { useContext } from 'react';
// import { css } from '@linaria/core';
import {
  AnchorTag,
  Button,
  GreenBackground,
  Title,
  greenButton,
  horizontalPadding
} from '../../styles/styles';
import android from '../../assets/android.png';
import { PINK, WHITE } from '../../styles/colors';
import { AppContext } from '../../utils/context';
import RandomCharacter1 from '../../assets/artwork/RandomChar_1.svg';
import RandomCharacter2 from '../../assets/artwork/RandomChar_2.svg';
import RandomCharacter3 from '../../assets/artwork/RandomChar_3.svg';
import RandomCharacter4 from '../../assets/artwork/RandomChar_4.svg';
import Paul from '../../assets/artwork/Paul.svg';
import Andrew from '../../assets/artwork/Andrew.svg';
import Forest from '../../assets/artwork/Forest.svg';
import Diana from '../../assets/artwork/Diana.svg';
import NavBar from './NavBar';

export default function Header({ page }) {
  const { LAUCH_LIVE, screenWidth } = useContext(AppContext);
  switch (page) {
    case 'Title': {
      return (
        <>
          <NavBar />
          <HeaderDiv>
            <TitleSection>
              {/* {screenWidth > 800 ? <TitleImages /> : null} */}
              <MiddleTitleSection>
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
                        Download
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
                <img alt="logo" src={RandomCharacter1} />
                {screenWidth > 800 ? <img alt="logo" src={RandomCharacter2} /> : null}
                <img alt="logo" src={RandomCharacter3} />
                <img alt="logo" src={RandomCharacter4} />
              </TitleImages>
            </TitleSection>
          </HeaderDiv>
        </>
      );
    }
    case 'About': {
      return (
        <>
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
        </>
      );
    }
    case 'Blog': {
      return (
        <>
          <NavBar />
          <HeaderDiv>
            <TitleSection>
              <Title>Blog.</Title>
            </TitleSection>
          </HeaderDiv>
        </>
      );
    }
    case 'Contact': {
      return (
        <>
          <NavBar />
          <ContactHeaderDiv>
            <TitleSection>
              <Title>Tell us what you think!</Title>
            </TitleSection>
          </ContactHeaderDiv>
        </>
      );
    }
    default:
      return null;
  }
}

const HeaderDiv = styled.header`
  color: ${WHITE};
  background-color: ${PINK};
  padding-left: ${horizontalPadding};
  padding-right: ${horizontalPadding};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  justify-content: flex-end;
  height: 90vh;
`;

const ContactHeaderDiv = styled(HeaderDiv)`
  justify-content: center;
  height: 50vh;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  div {
    gap: 3vw;
    img {
      width: 130px;
      height: auto;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    gap: 0;
    div {
      gap: 1.2rem;
      img {
        width: 100px;
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
  padding-bottom: 4rem;
`;

const AboutTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
  gap: 20vh;
  div {
    gap: 2vw;
    img {
      width: 150px;
      height: auto;
    }
  }
  @media (max-width: 700px) {
    div {
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
  @media (max-width: 700px) {
    flex-direction: row;
  }
`;

// const headerChefs = css`
//   @media (max-width: 700px) {
//     margin-left: 0px;
//   }
// `;
