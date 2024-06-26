import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IconsContainer, SmallText, horizontalPadding, hoverUnderline } from '../../styles/styles';
import { GREEN } from '../../styles/colors';
import { AppContext } from '../../utils/context';
import MailinglistForm from '../forms/MailinglistForm';
import useScreenSize from '../../utils/useScreenSize';
import SocialIcon from './SocialIcon';
import DownloadSection from './DownloadSection';

export default function Footer() {
  const { currentYear } = useContext(AppContext);
  const screenSize = useScreenSize();

  return (
    <div className={footerSection} style={{ height: screenSize.height }}>
      <MailinglistForm />
      <DownloadSection />
      <IconsContainer>
        <SocialIcon type="discord" />
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
    </div>
  );
}

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

const footerSection = css`
  color: white;
  background-color: ${GREEN};
  padding: ${horizontalPadding} ${horizontalPadding};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
