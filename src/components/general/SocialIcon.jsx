import { css } from '@linaria/core';
import InstagramIcon from '../../assets/social-icons/IG_Icon';
import { ImgButton } from '../../styles/styles';
import TiktokIcon from '../../assets/social-icons/TikTok_Icon';
import FacebookIcon from '../../assets/social-icons/FB_Icon';

export default function SocialIcon({ sectionColor, type }) {
  switch (type) {
    case 'instagram': {
      return (
        <ImgButton
          alt="Connect with us on Instagram."
          className={sectionColor === 'green' ? hoverIconGreen : hoverIconPink}
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
          className={sectionColor === 'green' ? hoverIconGreen : hoverIconPink}
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
          className={sectionColor === 'green' ? hoverIconGreen : hoverIconPink}
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

export const hoverIconPink = css`
  &:hover {
    background: #ae564e;
  }
`;

export const hoverIconGreen = css`
  &:hover {
    background: #3f5953;
  }
`;
