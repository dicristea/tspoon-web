import { css, styled } from '@linaria/atomic';
import { Section } from '../../styles/styles';
import { BLACK, WHITE } from '../../styles/colors';
import Header from '../general/Header';
import Footer from '../general/Footer';
import ContactForm from '../forms/ContactForm';
import ContactGraphic from '../../assets/artwork/Contact_Graphic.svg';

export default function Contact() {
  return (
    <div>
      <Header className={fontColorWhite} page="Contact" />
      <ContactSection className={fontColorBlack}>
        <div>
          <img alt="Contact Us Graphic" className={contactArtwork} src={ContactGraphic} />
        </div>
        <ContactForm />
      </ContactSection>
      <Footer className={fontColorBlack} sectionColor="pink" />
    </div>
  );
}

const ContactSection = styled(Section)`
  padding: 4rem 3rem;
  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 450px;
  }
  @media (max-width: 730px) {
    padding: 3rem 3rem;
    flex-direction: row;
  }
`;

const contactArtwork = css`
  height: auto;
  width: 300px;
`;

const fontColorWhite = css`
  color: ${WHITE};
`;

const fontColorBlack = css`
  color: ${BLACK};
`;

// https://javascript.plainenglish.io/how-to-build-a-contact-form-in-react-that-sends-emails-using-emailjs-70011d2563a3
