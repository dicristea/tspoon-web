import { styled } from '@linaria/react';
import { css } from '@linaria/atomic';
import { BodyText, SmallText } from '../../styles/styles';

export default function Footer() {
  return (
    <FooterSection>
      <BodyText>Socials</BodyText>
      <FooterBar>
        <SmallText className={terms}>
          <a href="google.com">Privacy</a>
          <a href="google.com">Community Guidelines</a>
          <a href="google.com">Terms of Service</a>
        </SmallText>
        <SmallText className={incorporated}>2023 tspoon inc.</SmallText>
      </FooterBar>
    </FooterSection>
  );
}

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
  padding: 8vw;
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
