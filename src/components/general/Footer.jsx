import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ImgButton, SmallText, horizontalPadding } from '../../styles/styles';
import { GREEN, PINK, WHITE } from '../../styles/colors';
import AppleStoreBadge from '../../assets/appstore-badges/App_Store_Badge.svg';
import GooglePlayBadge from '../../assets/appstore-badges/Play_Store_Badge.svg';
import { AppContext } from '../../utils/context';
import WaitlistForm from '../forms/WaitlistForm';
import DownloadSection from './DownloadSection';
import SocialIcon from './SocialIcon';

export default function Footer({ sectionColor }) {
  const { LAUCH_LIVE, currentYear } = useContext(AppContext);

  return (
    <FooterSection style={{ backgroundColor: sectionColor === 'green' ? GREEN : PINK }}>
      {LAUCH_LIVE ? (
        <DownloadSection sectionColor={sectionColor} />
      ) : (
        <WaitlistForm sectionColor={sectionColor} />
      )}
      <IconsContainer>
        <SocialIcon sectionColor={sectionColor} type="instagram" />
        <SocialIcon sectionColor={sectionColor} type="tiktok" />
      </IconsContainer>
      {LAUCH_LIVE ? (
        <IconsContainer>
          <ImgButton href="https://www.instagram.com/tspoonapp/" target="_blank">
            <img alt="Download on Google Play." src={GooglePlayBadge} />
          </ImgButton>
          <ImgButton href="https://www.instagram.com/tspoonapp/" target="_blank">
            <img alt="Download on the Apple Store." src={AppleStoreBadge} />
          </ImgButton>
        </IconsContainer>
      ) : null}
      <FooterBar>
        <SmallText className={company}>© {currentYear} Tspoon, LLC.</SmallText>
        <SmallText className={terms}>
          <Link className={hoverUnderline} to="/privacy">
            Privacy
          </Link>
          <Link className={hoverUnderline} to="/community-guidelines">
            Community Guidelines
          </Link>
          <Link className={hoverUnderline} to="/terms">
            Terms of Service
          </Link>
        </SmallText>
      </FooterBar>
    </FooterSection>
  );
}

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4vw;
  padding: 20px 0;
`;

const hoverUnderline = css`
  color: white;
  text-decoration: none;
  background: linear-gradient(${WHITE}, ${WHITE}) bottom / 0 0.1em no-repeat;
  transition: 200ms background-size;
  &:hover {
    color: white;
    background-size: 100% 0.1em;
  }
`;

const terms = css`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  flex-wrap: wrap;
  @media (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
  }
  gap: 3vw;
`;

const company = css`
  margin-right: auto;
`;

export const FooterSection = styled.div`
  color: white;
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
  line-height: 1.5rem;
  flex-direction: row;
  gap: 4vw;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
