/* eslint-disable react/no-unescaped-entities */
import { css } from '@linaria/atomic';
import sStyles, { Section, Title } from '../../styles/styles';
import { BLACK, PINK } from '../../styles/colors';
import loadingAnimation from '../../assets/Loading_Animation_color.gif';
import SocialsFooter from '../general/SocialsFooter';
import WaitlistForm from '../general/WaitlistForm';

export default function JoinWaitlist() {
  return (
    <div className={waitlistContainer}>
      <Section className={noPadding}>
        <Title className={waitlistTitle}>Something's Cooking...</Title>
        <img alt="placeholder 1" src={loadingAnimation} style={sStyles.bigLoadingAnimation} />
        <WaitlistForm />
      </Section>
      <SocialsFooter className={fontColorBlack} />
    </div>
  );
}

const waitlistContainer = css`
  display: grid;
  padding-top: 100px;
  height: 100%;
  @media (max-width: 600px) {
    padding-top: 0;
  }
`;

const noPadding = css`
  padding: 0;
  display: grid;
  gap: 5px;
`;

const waitlistTitle = css`
  margin-bottom: 0;
  color: ${PINK};
`;

const fontColorBlack = css`
  color: ${BLACK};
  align-self: end;
`;
