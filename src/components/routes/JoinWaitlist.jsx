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
        <img
          alt="Tspoon wok toss loading animation."
          className={wokAnimation}
          src={loadingAnimation}
        />
        {/* <section className="form" id="form">
          <iframe
            height="554"
            src="https://docs.google.com/forms/d/e/1FAIpQLSciNNrpsv4qrffi8eKZ-Hexw-GRWdlsWnuCXU5-uvgZGxbS9Q/viewform?embedded=true"
            title="Google Form"
            width="640"
          >
            Loading…
          </iframe>
        </section> */}
        <WaitlistForm />
      </Section>
      <SocialsFooter className={socialsFooter} />
    </div>
  );
}

const waitlistContainer = css`
  display: grid;
  padding-top: 4vw;
  height: 100vh;
  gap: 10vh;
  @media (max-width: 600px) {
    padding-top: 0;
    gap: 0;
  }
`;

const noPadding = css`
  padding: 0;
  display: grid;
  gap: 5px;
`;

const waitlistTitle = css`
  color: ${PINK};
  margin: 50px;
  @media (max-width: 600px) {
    margin-bottom: 0;
  }
`;

const wokAnimation = css`
  ${sStyles.bigImageSize}
  @media (max-width: 600px) {
    ${sStyles.normalImageSize}
  }
`;

const socialsFooter = css`
  color: ${BLACK};
  align-self: end;
`;
