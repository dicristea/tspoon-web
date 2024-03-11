import { css, styled } from '@linaria/atomic';
import { BodyText, Heading2, Section } from '../../styles/styles';
import { BLACK, WHITE } from '../../styles/colors';
import Header from '../general/Header';
import Footer from '../general/Footer';
import DownloadSection from '../general/DownloadSection';

// Connect using EmailJS

export default function Contact() {
  return (
    <div>
      <Header className={fontColorWhite} page="Contact" />
      <ContactSection className={fontColorBlack}>
        <div>
          <Heading2>Contact us</Heading2>
          <BodyText>
            If you&apos;d like to know more about us, have any questions, or would like to get
            involved, please feel free to contact us at &quot;cookonspoon&quot; at gmail.
          </BodyText>
        </div>
      </ContactSection>
      <DownloadSection sectionColor="pink" />
      <Footer className={fontColorBlack} />
    </div>
  );
}

const ContactSection = styled(Section)`
  padding: 4rem 0;
  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 450px;
  }
  @media (max-width: 700px) {
    padding: 3rem 3rem;
    display: grid;
  }
`;

const fontColorWhite = css`
  color: ${WHITE};
`;

const fontColorBlack = css`
  color: ${BLACK};
`;

// https://javascript.plainenglish.io/how-to-build-a-contact-form-in-react-that-sends-emails-using-emailjs-70011d2563a3
