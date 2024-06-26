import { css, styled } from '@linaria/atomic';
import { useRef } from 'react';
import { Section } from '../../styles/styles';
import Header from '../general/Header';
import Footer from '../general/Footer';
import ContactForm from '../forms/ContactForm';
import ContactGraphic from '../../assets/artwork/Contact_Graphic.svg';

export default function Contact() {
  const signUpRef = useRef();

  return (
    <div>
      <Header page="Contact" signUpRef={signUpRef} />
      <ContactSection>
        <img alt="Contact Us Graphic" className={contactArtwork} src={ContactGraphic} />
        <ContactForm />
      </ContactSection>
      <div ref={signUpRef}>
        <Footer />
      </div>
    </div>
  );
}

const ContactSection = styled(Section)`
  padding: 4rem 3rem;
  div {
    display: grid;
    gap: 20px;
    max-width: 450px;
  }
  @media (max-width: 730px) {
    padding: 3rem 3rem;
  }
`;

const contactArtwork = css`
  height: auto;
  width: 300px;
  opacity: 0;
  animation: fadeInAnimation ease 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
      transform: translateY(15%);
      filter: blur(5px);
    }
    100% {
      opacity: 1;
      filter: blur(0);
      transform: translateY(0);
    }
  }
  @media (max-width: 730px) {
    grid-row-start: 2;
  }
`;

// https://javascript.plainenglish.io/how-to-build-a-contact-form-in-react-that-sends-emails-using-emailjs-70011d2563a3
