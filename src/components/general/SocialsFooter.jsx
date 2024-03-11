import { styled } from '@linaria/react';
import sStyles, { ImgButton, horizontalPadding } from '../../styles/styles';
import InstagramIcon from '../../assets/social-icons/IG_Icon.svg';
// import FacebookIcon from '../../assets/social-icons/FB_Icon.svg';
import TiktokIcon from '../../assets/social-icons/TikTok_Icon.svg';

export default function SocialsFooter() {
  return (
    <FooterSection>
      <SocialsContainer>
        <div style={sStyles.socialButtons}>
          <ImgButton href="https://www.instagram.com/tspoonapp/" target="_blank">
            <img alt="Connect with us on Instagram." src={InstagramIcon} />
          </ImgButton>
        </div>
        <div style={sStyles.socialButtons}>
          <ImgButton href="https://www.tiktok.com/@tspoon.app" target="_blank">
            <img alt="Connect with us on TikTok." src={TiktokIcon} />
          </ImgButton>
        </div>
      </SocialsContainer>
    </FooterSection>
  );
}
export const SocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;

export const FooterSection = styled.div`
  color: black;
  padding: ${horizontalPadding} ${horizontalPadding};
  width: 100%;
  height: auto;
  display: grid;
  justify-content: center;
  align-items: end;
  gap: 2rem;
`;

export const FooterBar = styled.footer`
  display: flex;
  justify-content: center;
  font-size: small;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  gap: 25px;
`;
