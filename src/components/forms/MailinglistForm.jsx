/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react';
import { css } from '@linaria/core';
import '@fontsource/source-sans-pro'; // Defaults to weight 400
import { Link } from 'react-router-dom';
import {
  Button,
  Heading2,
  SmallText,
  borderRadius,
  fieldset,
  formSubmitted,
  hoverUnderline,
  pinkButton
} from '../../styles/styles';
import { BEIGE, GRAY, GREEN, PINK, WHITE } from '../../styles/colors';

export default function MailinglistForm() {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    'entry.1549536226': '',
    'entry.239868667': '',
    'entry.1356397291': ''
  });
  const NAME_ID = 'entry.1549536226';
  const EMAIL_ID = 'entry.239868667';
  const CHECKBOX_ID = 'entry.1356397291';

  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);

    const url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSciNNrpsv4qrffi8eKZ-Hexw-GRWdlsWnuCXU5-uvgZGxbS9Q/formResponse?${NAME_ID}=${formData[NAME_ID]}&${EMAIL_ID}=${formData[EMAIL_ID]}&${CHECKBOX_ID}=${formData[CHECKBOX_ID]}`;

    // eslint-disable-next-line no-unused-vars
    const res = await fetch(url, {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }
  const form = useRef();

  return (
    <div className={formWrapper} id="mailinglist">
      <Heading2 className={formHeader} id="mailinglist">
        Let&apos;s cook!
      </Heading2>
      <div className="formcontact">
        {submit ? (
          <div className={formSubmitted}>
            <div>Thanks for the support! </div>
            <div>You&#39;ll hear from us very soon.</div>
          </div>
        ) : (
          <form className={mailinglistForm} ref={form} target="_self" onSubmit={handleSubmit}>
            <fieldset className={fieldset}>
              <input
                aria-required
                required
                aria-label="Name"
                autoComplete="true"
                className={mailinglistInput}
                id={NAME_ID}
                name={NAME_ID}
                placeholder="Name"
                type="text"
                value={formData[NAME_ID]}
                onChange={handleInputData(NAME_ID)}
              />
            </fieldset>
            <fieldset className={fieldset}>
              <input
                aria-required
                required
                aria-label="Email"
                autoComplete="true"
                className={mailinglistInput}
                id={EMAIL_ID}
                name={EMAIL_ID}
                placeholder="Email"
                type="email"
                value={formData[EMAIL_ID]}
                onChange={handleInputData(EMAIL_ID)}
              />
            </fieldset>
            <fieldset className={fieldset}>
              <input
                aria-required
                required
                aria-label="I agree to the Terms of Service."
                autoComplete="true"
                className={checkbox}
                id={CHECKBOX_ID}
                name={CHECKBOX_ID}
                type="checkbox"
                value="I agree to the Terms of Service."
                onChange={handleInputData(CHECKBOX_ID)}
              />
              <SmallText>
                I agree to the{' '}
                <Link className={hoverUnderline} to="/terms">
                  Terms of Service
                </Link>
                .
              </SmallText>
            </fieldset>
            <Button className={pinkButton} type="submit">
              JOIN OUR KITCHEN
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}

const formWrapper = css`
  color: white;
  background-color: ${GREEN};
  @media (min-width: 500px) {
    padding: 4vw 0 2vw 0;
  }
`;

const formHeader = css`
  text-align: center;
  color: white;
  padding: 2rem 0 !important;
  @media (min-width: 550px) {
    padding: 0 0 4vw 0 !important;
  }
`;

const mailinglistForm = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: ${WHITE};
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${GRAY} inset !important;
  }
`;

const mailinglistInput = css`
  font-family: 'Source Sans Pro';
  color: ${WHITE};
  &:hover {
    border: 1px solid ${BEIGE};
  }
  ::placeholder {
    color: ${WHITE};
  }
  font-size: 0.9rem;
  font-weight: 300;
  outline: none;
  flex: auto;
  border: none;
  border: 1px solid ${WHITE};
  border-radius: ${borderRadius};
  background: transparent;
  display: flex;
  align-items: center;
  padding: 0.8rem 0.6rem;
  text-decoration: none;
`;

const checkbox = css`
  position: relative;
  cursor: pointer;
  :before {
    content: '';
    display: block;
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    border: 2px solid ${BEIGE};
    border-radius: 3px;
    background-color: ${WHITE};
  }
  :checked:after {
    content: '';
    display: block;
    width: 6px;
    height: 11px;
    border: solid ${PINK};
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 3px;
    left: 7px;
  }
`;

// Source: https://bootcamp.uxdesign.cc/custom-google-form-interface-with-reactjs-5d6762d8fa65
