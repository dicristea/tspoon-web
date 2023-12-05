import { styled } from '@linaria/react';
import { css } from '@linaria/atomic';
import sStyles, {
  BodyText,
  Button,
  darkTransBackgroundColor,
  horizontalPadding
} from '../../styles/styles';
import logo from '../../assets/logo/App Icon_Trans.svg';
import android from '../../assets/android.png';
import { PINK, WHITE } from '../../styles/colors';
import NavBar from './NavBar';

export default function Header({ page }) {
  switch (page) {
    case 'Title': {
      return (
        <>
          <NavBar />
          <HeaderDiv>
            <TitleSection>
              <TitleImages>
                <img alt="logo" className={placeholderImageA} src={logo} />
                <img alt="logo" className={placeholderImageB} src={logo} />
              </TitleImages>
              <Title>
                <List>
                  <li>No</li>
                  <li>Nameless</li>
                  <li>Chefs</li>
                </List>
              </Title>
              <TitleImages>
                <img alt="logo" className={placeholderImageC} src={logo} />
                <img alt="logo" className={placeholderImageD} src={logo} />
              </TitleImages>
            </TitleSection>
            <div style={sStyles.downloadButtons}>
              <Button>Download iOS</Button>
              <Button>
                Download
                <img alt="android logo" src={android} />
              </Button>
            </div>
          </HeaderDiv>
        </>
      );
    }
    case 'About': {
      return (
        <>
          <NavBar greenColor />
          <HeaderDiv className={GreenHeader}>
            <AboutTitleSection>
              <BodyText>About Us</BodyText>
              <Title>Made by nameless chefs.</Title>
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
          <HeaderDiv>
            <TitleSection>
              <Title>Tell us what you think!</Title>
            </TitleSection>
          </HeaderDiv>
        </>
      );
    }
    default:
      return null;
  }
}

const GreenHeader = css`
  background-color: ${darkTransBackgroundColor};
`;

const Title = styled.div`
  text-align: center;
  ${sStyles.titleFont}
  line-height: 5rem;
  ${sStyles.zIndexHighest}
`;

const List = styled.ul`
  text-decoration: none;
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderDiv = styled.header`
  color: ${WHITE};
  background-color: ${PINK};
  padding-bottom: 4rem;
  padding-left: ${horizontalPadding};
  padding-right: ${horizontalPadding};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  justify-content: center;
  min-height: 440px;
  div {
    button {
      height: 2rem;
    }
  }
  @media (max-width: 650px) {
    height: min-content;
  }
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 2rem;
  padding-top: 2rem;
  gap: 10vw;
  @media (max-width: 650px) {
    flex-direction: column;
    gap: 8vw;
  }
`;

const AboutTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
  padding-top: 4rem;
  gap: 2vw;
`;

const TitleImages = styled.div`
  display: flex;
  align-items: center;
  gap: 8vw;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 650px) {
    flex-direction: row;
    gap: 15vw;
  }
`;

const placeholderImageA = css`
  ${sStyles.placeholderImage}
  transform: rotate(10deg);
  margin-left: 50px;
  @media (max-width: 650px) {
    margin-left: 0px;
    transform: rotate(15deg);
  }
`;
const placeholderImageB = css`
  ${sStyles.placeholderImage}
  transform: rotate(-20deg);
  margin-right: 50px;
  @media (max-width: 650px) {
    margin-right: 0px;
    transform: rotate(-15deg);
  }
`;
const placeholderImageC = css`
  ${sStyles.placeholderImage}
  transform: rotate(-10deg);
  margin-right: 50px;
  @media (max-width: 650px) {
    margin-right: 0px;
    transform: rotate(15deg);
  }
`;
const placeholderImageD = css`
  ${sStyles.placeholderImage}
  transform: rotate(20deg);
  margin-left: 50px;
  @media (max-width: 650px) {
    margin-left: 0px;
    transform: rotate(-15deg);
  }
`;
