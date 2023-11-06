import { styled } from '@linaria/react';
import { css } from '@linaria/atomic';
import sStyles, { Button, ImgButton, SmallText, horizontalPadding } from '../../styles/styles';
import { BLACK, PINK } from '../../styles/colors';
import googlePlayBadge from '../../assets/google-play/google-play-badge.png';
import appleStoreBadge from '../../assets/app-store/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';
// import AppStoreBadge from '../../assets/app-store/Download_on_App_Store/Black_lockup/SVG/AppStoreBadge';
// import FacebookIcon from '../../assets/facebook/Secondary Logo/Facebook_Logo_Secondary';

export default function Footer() {
  return (
    <FooterSection>
      <Socials>
        <div style={sStyles.downloadButtons}>
          <ImgButton>
            <img alt="Download on Google Play." src={googlePlayBadge} />
          </ImgButton>
          {/* <AppStoreBadge /> */}
          <ImgButton>
            <img alt="Download on the Apple Store." src={appleStoreBadge} />
          </ImgButton>
        </div>
        <div style={sStyles.socialButtons}>
          <Button>Facebook</Button>
          <Button>Insta</Button>
          <Button>Tiktok</Button>
        </div>
      </Socials>
      <FooterBar>
        <SmallText className={terms}>
          <a className={hoverChange} href="https://www.google.com" rel="noreferrer" target="_blank">
            Privacy
          </a>
          <a className={hoverChange} href="https://www.google.com" rel="noreferrer" target="_blank">
            Community Guidelines
          </a>
          <a className={hoverChange} href="https://www.google.com" rel="noreferrer" target="_blank">
            Terms of Service
          </a>
        </SmallText>
        <SmallText className={incorporated}>©2023 tspoon Inc.</SmallText>
      </FooterBar>
    </FooterSection>
  );
}

const Socials = styled.div`
  display: flex;
  flex-direction: column;
`;

const hoverChange = css`
  color: ${BLACK};
  text-decoration: none;
  background: linear-gradient(${PINK}, ${PINK}) bottom / 0 0.1em no-repeat;
  transition: 200ms background-size;
  &:hover {
    color: ${PINK};
    background-size: 100% 0.1em;
  }
`;

const terms = css`
  flex-direction: row;
  align-items: flex-end;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
  gap: 2vw;
`;
const incorporated = css`
  margin-left: auto;
  @media (max-width: 600px) {
    margin-left: 0%;
  }
`;

export const FooterSection = styled.div`
  color: black;
  padding: ${horizontalPadding} ${horizontalPadding};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4vw;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: 600px) {
  }
`;

export const FooterBar = styled.footer`
  font-size: small;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 5;
  flex-direction: row;
  gap: 4vw;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
