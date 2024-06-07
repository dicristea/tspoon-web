import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ImgButton, SmallText, horizontalPadding, hoverUnderline } from '../../styles/styles';
import { GREEN } from '../../styles/colors';
// import AppleStoreBadge from '../../assets/appstore-badges/App_Store_Badge.svg';
import GooglePlayBadge from '../../assets/appstore-badges/Play_Store_Badge.svg';
import { AppContext } from '../../utils/context';
import MailinglistForm from '../forms/MailinglistForm';
import SocialIcon from './SocialIcon';

export default function Footer() {
  const { currentYear } = useContext(AppContext);

  return (
    <FooterSection>
      <MailinglistForm />
      <IconsContainer>
        <ImgButton
          href="https://play.google.com/store/apps/details?id=com.foresthu2006.Spoon"
          target="_blank"
        >
          <img alt="Download on Google Play." src={GooglePlayBadge} />
        </ImgButton>
        {/* <ImgButton href="https://www.instagram.com/tspoonapp/" target="_blank">
          <img alt="Download on the Apple Store." src={AppleStoreBadge} />
        </ImgButton> */}
      </IconsContainer>
      <IconsContainer>
        <SocialIcon type="instagram" />
        <SocialIcon type="tiktok" />
        <SocialIcon type="facebook" />
      </IconsContainer>
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

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4vw;
  padding: 15px 0;
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

const FooterSection = styled.div`
  color: white;
  background-color: ${GREEN};
  padding: ${horizontalPadding} ${horizontalPadding};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const FooterBar = styled.footer`
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
