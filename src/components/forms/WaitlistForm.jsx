/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react';
import { css } from '@linaria/core';
import '@fontsource/source-sans-pro'; // Defaults to weight 400

import {
  Button,
  Heading3,
  borderRadius,
  fieldset,
  formSubmitted,
  greenButton,
  pinkButton
} from '../../styles/styles';
import { BEIGE, GRAY, WHITE } from '../../styles/colors';

export default function WaitlistForm({ sectionColor }) {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    'entry.1549536226': '',
    'entry.239868667': ''
  });
  const NAME_ID = 'entry.1549536226';
  const EMAIL_ID = 'entry.239868667';

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

    const url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSciNNrpsv4qrffi8eKZ-Hexw-GRWdlsWnuCXU5-uvgZGxbS9Q/formResponse?${NAME_ID}=${formData[NAME_ID]}&${EMAIL_ID}=${formData[EMAIL_ID]}`;

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
    <div className={formWrapper}>
      <Heading3 className={formHeader} id="waitlist">
        Something&apos;s cooking!
      </Heading3>
      <div className="formcontact">
        {submit ? (
          <div className={formSubmitted}>
            <div>Thanks for the support! </div>
            <div>You&#39;ll hear from us very soon</div>
          </div>
        ) : (
          <form className={waitlistForm} ref={form} target="_self" onSubmit={handleSubmit}>
            <fieldset className={fieldset}>
              <input
                required
                aria-label="Name"
                aria-required="true"
                autoComplete="true"
                className={waitlistInput}
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
                required
                aria-label="Email"
                aria-required="true"
                autoComplete="true"
                className={waitlistInput}
                id={EMAIL_ID}
                name={EMAIL_ID}
                placeholder="Email"
                type="email"
                value={formData[EMAIL_ID]}
                onChange={handleInputData(EMAIL_ID)}
              />
            </fieldset>
            <Button className={sectionColor === 'pink' ? greenButton : pinkButton} type="submit">
              JOIN THE WAITLIST
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}

const formWrapper = css`
  color: white;
`;

const formHeader = css`
  color: white;
  padding: 20px 0px;
`;

const waitlistForm = css`
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

const waitlistInput = css`
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

// Source: https://bootcamp.uxdesign.cc/custom-google-form-interface-with-reactjs-5d6762d8fa65
