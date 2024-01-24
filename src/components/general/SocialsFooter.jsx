import { styled } from '@linaria/react';
import sStyles, { ImgButton, SmallText, horizontalPadding } from '../../styles/styles';
import InstagramIcon from '../../assets/social-icons/IG_Icon.svg';
// import FacebookIcon from '../../assets/social-icons/FB_Icon.svg';
// import TiktokIcon from '../../assets/social-icons/TikTok_Icon.svg';

export default function SocialsFooter() {
  return (
    <FooterSection>
      <div style={sStyles.socialButtons}>
        <ImgButton href="https://www.instagram.com/tspoonapp/" target="_blank">
          <img alt="Connect with us on Instagram." src={InstagramIcon} />
        </ImgButton>
      </div>
      <FooterBar>
        <SmallText>©2023 tspoon Inc.</SmallText>
      </FooterBar>
    </FooterSection>
  );
}

export const FooterSection = styled.div`
  color: black;
  padding: ${horizontalPadding} ${horizontalPadding};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 600px) {
  }
`;

export const FooterBar = styled.footer`
  font-size: small;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  gap: 25px;
`;
