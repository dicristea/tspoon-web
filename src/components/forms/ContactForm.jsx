/* eslint-disable jsx-a11y/label-has-associated-control */
import '@fontsource/source-sans-pro'; // Defaults to weight 400
import React, { useRef, useState } from 'react';
import { css } from '@linaria/core';
import emailjs from 'emailjs-com';
import {
  BodyText,
  Button,
  Heading2,
  borderRadius,
  fieldset,
  formSubmitted,
  greenButton
} from '../../styles/styles';
import { BEIGE, GRAY, GREEN } from '../../styles/colors';

export default function ContactForm() {
  const [submit, setSubmit] = useState(false);
  // const [userName, setUserName] = useState();
  // const userEmail, setUserEmail = useState()
  // const userMessage, setUserMessage = useState()

  const SERVICE_ID = 'service_iuyucmg';
  const TEMPLATE_ID = 'contact_template_xpqbhrn';
  // const PUBLIC_KEY = 'mQiNHpDZ8FVYvMAMk';

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmit(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: 'mQiNHpDZ8FVYvMAMk'
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  const form = useRef();

  return (
    <div>
      <Heading2 className={contactFormHeader}>Contact us</Heading2>
      <BodyText>
        If you&apos;d like to know more about us, have any questions, or would like to get involved,
        please feel free to contact us!
      </BodyText>
      <div>
        {submit ? (
          <div className={formSubmitted}>
            <div>Thanks for reaching out! </div>
            <div>We&#39;ll get back to you soon.</div>
          </div>
        ) : (
          <form className={contactForm} ref={form} target="_self" onSubmit={sendEmail}>
            <fieldset className={fieldset}>
              <input
                required
                aria-label="Name"
                aria-required="true"
                autoComplete="true"
                className={textInput}
                id="userName"
                name="name"
                placeholder="Name"
                type="text"
              />
            </fieldset>
            <fieldset className={fieldset}>
              <input
                required
                aria-label="Email"
                aria-required="true"
                autoComplete="true"
                className={textInput}
                id="userEmail"
                name="email"
                placeholder="Email address"
                type="email"
              />
            </fieldset>
            <fieldset className={fieldset}>
              <textarea
                required
                aria-label="Message"
                aria-required="true"
                autoComplete="true"
                className={textareaInput}
                id="userMessage"
                name="message"
                placeholder="Message"
                type="textarea"
              />
            </fieldset>
            <Button className={greenButton} type="submit" value="Send">
              Send
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}

const contactFormHeader = css`
  color: ${GREEN};
  padding: 10px 0px;
`;

const contactForm = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${GREEN};
  font-family: 'Source Sans Pro';
  font-weight: 300;
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${GRAY} inset !important;
  }
`;

const textareaInput = css`
  outline: none;
  font-family: 'Source Sans Pro';
  font-size: 0.9rem;
  font-weight: 300;
  flex: auto;
  border: none;
  border: 1px solid ${GREEN};
  border-radius: ${borderRadius};
  background: transparent;
  display: flex;
  align-items: center;
  padding: 0.8rem;
  text-decoration: none;
  &:hover {
    border: 1px solid ${BEIGE};
  }
`;

const textInput = css`
  font-family: 'Source Sans Pro';
  font-size: 0.9rem;
  font-weight: 300;
  outline: none;
  flex: auto;
  border: none;
  border: 1px solid ${GREEN};
  border-radius: ${borderRadius};
  background: transparent;
  display: flex;
  align-items: center;
  padding: 0.8rem 0.6rem;
  text-decoration: none;

  &:hover {
    border: 1px solid ${BEIGE};
  }
`;

// Source: https://bootcamp.uxdesign.cc/custom-google-form-interface-with-reactjs-5d6762d8fa65
