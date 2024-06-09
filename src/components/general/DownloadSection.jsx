import { css } from '@linaria/core';
import {
  Button,
  ButtonContainer,
  Heading3,
  Section,
  greenHoverUnderline,
  sectionGap
} from '../../styles/styles';
import { redirectGooglePlay } from '../../utils/utils';

export default function DownloadSection() {
  return (
    <Section className={downloadSection}>
      <Heading3>Download Tspoon</Heading3>
      <ButtonContainer>
        <Button className={greenHoverUnderline} onClick={() => redirectGooglePlay()}>
          Start cooking on Google Play!
        </Button>
      </ButtonContainer>
    </Section>
  );
}

const downloadSection = css`
  flex-direction: column;
  padding-bottom: ${sectionGap};
`;

// export const downloadCard = css`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   gap: 2vw;
//   background-color: ${PINK};
//   border-radius: 20px;
//   padding: 1.5rem;
//   border: 1px ${WHITE} solid;
//   img {
//     width: 30px;
//     height: auto;
//   }
//   div {
//     display: flex;
//     flex-direction: column;
//     gap: 1vw;
//     @media (max-width: 600px) {
//       /* align-items: center; */
//     }
//   }
//   @media (max-width: 600px) {
//     padding: 1rem;
//     flex-direction: column;
//   }
// `;
