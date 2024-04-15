import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { Heading3, SmallHeading, SmallText } from '../../styles/styles';
import android from '../../assets/android.png';
import { GREEN, PINK, WHITE } from '../../styles/colors';

export default function DownloadSection({ sectionColor }) {
  return (
    <div>
      <Heading3 style={{ color: WHITE }}>Downloads</Heading3>
      <ButtonContainer className={mobile}>
        {/* Will need iOS card later */}
        {/* <DownloadCard>
            <img alt="QR Code for iOS download" src={android} />
            <div>
              <SmallHeading>Download Tspoon Now!</SmallHeading>
              <SmallText>Scan to Download on iOS</SmallText>
            </div>
          </DownloadCard> */}
        <div
          className={downloadCard}
          style={{ backgroundColor: sectionColor === 'green' ? GREEN : PINK }}
        >
          <img alt="QR Code for Google Play download" src={android} />
          <div>
            <SmallHeading>Download Tspoon Now!</SmallHeading>
            <SmallText>Scan to Download on Google Play</SmallText>
          </div>
        </div>
      </ButtonContainer>
    </div>
  );
}

export const ButtonContainer = styled.div`
  gap: 4vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  justify-items: center;
  @media (max-width: 600px) {
    gap: 8vw;
    padding: 0 1rem 1rem 1rem;
  }
  div {
    flex: auto;
  }
`;

export const downloadCard = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2vw;
  background-color: ${PINK};
  border-radius: 20px;
  padding: 1.5rem;
  border: 1px ${WHITE} solid;
  img {
    width: 30px;
    height: auto;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 1vw;
    @media (max-width: 600px) {
      /* align-items: center; */
    }
  }
  @media (max-width: 600px) {
    padding: 1rem;
    flex-direction: column;
  }
`;

export const mobile = css`
  @media (max-width: 600px) {
    grid-auto-flow: row;
  }
`;
