import { styled } from '@linaria/react';
import { css } from '@linaria/atomic';
import { useContext } from 'react';
import sStyles, { ImgButton, SmallText, horizontalPadding } from '../../styles/styles';
import { BLACK, PINK } from '../../styles/colors';
import AppleStoreBadge from '../../assets/appstore-badges/App_Store_Badge.svg';
import GooglePlayBadge from '../../assets/appstore-badges/Play_Store_Badge.svg';
import { AppContext } from '../../utils/context';
import SocialsFooter from './SocialsFooter';

export default function Footer() {
  const { LAUCH_LIVE } = useContext(AppContext);

  return (
    <FooterSection>
      <Socials>
        {LAUCH_LIVE ? (
          <div style={sStyles.downloadButtons}>
            <ImgButton href="https://www.instagram.com/tspoonapp/" target="_blank">
              <img alt="Download on Google Play." src={GooglePlayBadge} />
            </ImgButton>
            <ImgButton href="https://www.instagram.com/tspoonapp/" target="_blank">
              <img alt="Download on the Apple Store." src={AppleStoreBadge} />
            </ImgButton>
          </div>
        ) : null}
        <SocialsFooter />
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
        <SmallText className={incorporated}>©2023 Tspoon Inc.</SmallText>
      </FooterBar>
    </FooterSection>
  );
}

const Socials = styled.div`
  gap: 40px;
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
  display: flex;
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
  gap: 50px;
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
