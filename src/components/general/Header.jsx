import { styled } from '@linaria/react';
// import { css } from '@linaria/atomic';
import { useContext } from 'react';
import sStyles, {
  AnchorTag,
  Button,
  GreenBackground,
  List,
  Title,
  horizontalPadding
} from '../../styles/styles';
import android from '../../assets/android.png';
import { PINK, WHITE } from '../../styles/colors';
import { AppContext } from '../../utils/context';
import NavBar from './NavBar';

export default function Header({ page }) {
  const { LAUCH_LIVE } = useContext(AppContext);
  switch (page) {
    case 'Title': {
      return (
        <>
          <NavBar />
          <HeaderDiv>
            <TitleSection>
              {/* <TitleImages>
                <img alt="logo" className={placeholderImageA} src={logo} />
                <img alt="logo" className={placeholderImageB} src={logo} />
              </TitleImages> */}
              <Title>
                <List>
                  <li>No</li>
                  <li>Nameless</li>
                  <li>Chefs</li>
                </List>
              </Title>
              {/* <TitleImages>
                <img alt="logo" className={placeholderImageC} src={logo} />
                <img alt="logo" className={placeholderImageD} src={logo} />
              </TitleImages> */}
            </TitleSection>
            <div style={sStyles.downloadButtons}>
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
                  <Button>JOIN THE WAITLIST</Button>
                </AnchorTag>
              )}
            </div>
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
  @media (max-width: 700px) {
    height: min-content;
  }
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 2rem;
  padding-top: 2rem;
  gap: 10vw;
  @media (max-width: 700px) {
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

// const TitleImages = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8vw;
//   flex-direction: column;
//   justify-content: center;
//   @media (max-width: 700px) {
//     flex-direction: row;
//     gap: 15vw;
//   }
// `;

// const placeholderImageA = css`
//   ${sStyles.rotatedPlaceholderImage}
//   transform: rotate(10deg);
//   margin-left: 50px;
//   @media (max-width: 700px) {
//     margin-left: 0px;
//     transform: rotate(15deg);
//   }
// `;
// const placeholderImageB = css`
//   ${sStyles.rotatedPlaceholderImage}
//   transform: rotate(-20deg);
//   margin-right: 50px;
//   @media (max-width: 700px) {
//     margin-right: 0px;
//     transform: rotate(-15deg);
//   }
// `;
// const placeholderImageC = css`
//   ${sStyles.rotatedPlaceholderImage}
//   transform: rotate(-10deg);
//   margin-right: 50px;
//   @media (max-width: 700px) {
//     margin-right: 0px;
//     transform: rotate(15deg);
//   }
// `;
// const placeholderImageD = css`
//   ${sStyles.rotatedPlaceholderImage}
//   transform: rotate(20deg);
//   margin-left: 50px;
//   @media (max-width: 700px) {
//     margin-left: 0px;
//     transform: rotate(-15deg);
//   }
// `;
