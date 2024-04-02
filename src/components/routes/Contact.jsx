import { css, styled } from '@linaria/atomic';
import { Section } from '../../styles/styles';
import { BLACK, WHITE } from '../../styles/colors';
import Header from '../general/Header';
import Footer from '../general/Footer';
import DownloadSection from '../general/DownloadSection';
import ContactForm from '../forms/ContactForm';

export default function Contact() {
  return (
    <div>
      <Header className={fontColorWhite} page="Contact" />
      <ContactSection className={fontColorBlack}>
        <ContactForm />
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
