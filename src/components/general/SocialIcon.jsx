import { css } from '@linaria/core';
import InstagramIcon from '../../assets/social-icons/Instagram/IG_Icon';
import { ImgButton } from '../../styles/styles';
import TiktokIcon from '../../assets/social-icons/TikTok/TikTok_Icon';
import FacebookIcon from '../../assets/social-icons/FB_Icon';

export default function SocialIcon({ type }) {
  switch (type) {
    case 'instagram': {
      return (
        <ImgButton
          alt="Connect with us on Instagram."
          className={hoverIconGreen}
          href="https://www.instagram.com/tspoonapp/"
          target="_blank"
        >
          <InstagramIcon />
        </ImgButton>
      );
    }
    case 'tiktok': {
      return (
        <ImgButton
          alt="Connect with us on TikTok."
          className={hoverIconGreen}
          href="https://www.tiktok.com/@tspoon.app"
          target="_blank"
        >
          <TiktokIcon />
        </ImgButton>
      );
    }
    case 'facebook': {
      return (
        <ImgButton
          alt="Connect with us on Facebook."
          className={hoverIconGreen}
          href="https://www.tiktok.com/@tspoon.app"
          style={{ padding: '0' }}
          target="_blank"
        >
          <FacebookIcon />
        </ImgButton>
      );
    }
    default:
      return null;
  }
}

export const hoverIconGreen = css`
  &:hover {
    background: #3f5953;
  }
`;

// export const hoverIconPink = css`
//   &:hover {
//     background: #ae564e;
//   }
// `;
