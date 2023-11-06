import { styled } from '@linaria/react';
import { css } from '@linaria/atomic';
import sStyles, { BodyText, Button } from '../../styles/styles';
import logo from '../../assets/logo/App Icon_Trans.svg';
import android from '../../assets/android.png';
import { PINK, WHITE } from '../../styles/colors';

export default function Header({ page }) {
  switch (page) {
    case 'Title': {
      return (
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
          <div className="download-buttons">
            <Button>Download iOS</Button>
            <Button>
              Download
              <img alt="android logo" src={android} />
            </Button>
          </div>
        </HeaderDiv>
      );
    }
    case 'About': {
      return (
        <HeaderDiv>
          <TitleSection>
            <BodyText>About Us</BodyText>
            <Title>Made by nameless chefs.</Title>
          </TitleSection>
        </HeaderDiv>
      );
    }
    case 'Blog': {
      return (
        <HeaderDiv>
          <TitleSection>
            <Title>Blog.</Title>
          </TitleSection>
        </HeaderDiv>
      );
    }
    default:
      return null;
  }
}

const placeholderImageA = css`
  border: 1px ${WHITE} solid;
  background-color: ${WHITE};
  width: 80px;
  transform: rotate(10deg);
  margin-left: 50px;
  @media (max-width: 600px) {
    margin-left: 0px;
    transform: rotate(15deg);
  }
`;
const placeholderImageB = css`
  border: 1px ${WHITE} solid;
  background-color: ${WHITE};
  width: 80px;
  transform: rotate(-20deg);
  margin-right: 50px;
  @media (max-width: 600px) {
    margin-right: 0px;
    transform: rotate(-15deg);
  }
`;
const placeholderImageC = css`
  border: 1px ${WHITE} solid;
  background-color: ${WHITE};
  width: 80px;
  transform: rotate(-10deg);
  margin-right: 50px;
  @media (max-width: 600px) {
    margin-right: 0px;
    transform: rotate(15deg);
  }
`;
const placeholderImageD = css`
  border: 1px ${WHITE} solid;
  background-color: ${WHITE};
  width: 80px;
  transform: rotate(20deg);
  margin-left: 50px;
  @media (max-width: 600px) {
    margin-left: 0px;
    transform: rotate(-15deg);
  }
`;

const Title = styled.div`
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
  padding: 0 2rem 4rem 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  justify-content: center;
  z-index: 5;
  div.download-buttons {
    display: flex;
    align-items: center;
    gap: 4vw;
    padding-top: 2rem;
  }
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 2rem;
  padding-top: 2rem;
  gap: 6vw;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 6vw;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 15vw;
  }
`;

const TitleImages = styled.div`
  display: flex;
  align-items: center;
  gap: 8vw;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 600px) {
    flex-direction: row;
    gap: 15vw;
  }
`;
