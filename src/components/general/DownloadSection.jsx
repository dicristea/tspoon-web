import { css } from '@linaria/core';
import { Heading3, Section } from '../../styles/styles';
import GreenButton from './GreenButton';

export default function DownloadSection() {
  return (
    <Section className={downloadSection}>
      <Heading3>Download Tspoon</Heading3>
      <div className={container}>
        <GreenButton />
      </div>
    </Section>
  );
}

const container = css`
  position: relative;
  button {
    transform: translate(-50%, 0%);
  }
`;

const downloadSection = css`
  flex-direction: column;
  padding-bottom: 100pt;
`;
