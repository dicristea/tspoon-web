import { styled } from '@linaria/react';
import { css } from '@linaria/atomic';
import { BodyText, Button } from '../../styles/styles';

export const navButton = styled(Button)`
  background-color: none;
  font-size: 8pt;
`;

export default function Footer() {
  return (
    <FooterSection>
      <BodyText>Socials</BodyText>
      <FooterBar>
        <BodyText className={left}>2023 tspoon inc.</BodyText>
        <div className={right}>
          <navButton>Privacy</navButton>
          <navButton>Community Guidelines</navButton>
          <navButton>Terms of Service</navButton>
        </div>
      </FooterBar>
    </FooterSection>
  );
}

const left = css`
  margin-right: auto;
`;
const right = css`
  gap: 2vw;
`;

export const FooterSection = styled.div`
  color: black;
  padding: 4vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    align-items: center;
  }
`;

export const FooterBar = styled.footer`
  font-size: small;
  padding: 4vw;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  z-index: 5;
  div {
    display: flex;
    align-items: center;
  }
`;

// const hoverUnderlineAnimation = css`
//   cursor: pointer;
//   display: inline-block;
//   position: relative;

//   &::after {
//     content: '';
//     position: absolute;
//     width: 100%;
//     transform: scaleX(0);
//     height: 1px;
//     bottom: 0;
//     left: 0;
//     background-color: var(--accent);
//     transition: transform 0.2s ease-out;
//   }

//   &:hover::after {
//     transform: scaleX(1);
//   }

//   /* Only way to show underline animation on mobile (no hover); however, line stays active until clicking off the button */
//   @media only screen and (max-width: 400px) {
//     &::after {
//       transform: scaleX(1);
//     }
//   }
// `;
