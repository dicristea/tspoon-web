/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { css } from '@linaria/atomic';
import sStyles, { WaitlistSubmitButton } from '../../styles/styles';
import { GRAY, GREEN, GREEN_HALF_OPAQUE, WHITE } from '../../styles/colors';

export default function WaitlistForm() {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    'entry.2037917220': '',
    'entry.1146839265': '',
    'entry.1451219623': ''
  });
  const FIRST_NAME_ID = 'entry.1549536226';
  const LAST_NAME_ID = 'entry.403905453';
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

    const url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSciNNrpsv4qrffi8eKZ-Hexw-GRWdlsWnuCXU5-uvgZGxbS9Q/formResponse?${FIRST_NAME_ID}=${formData[FIRST_NAME_ID]}&${LAST_NAME_ID}=${formData[LAST_NAME_ID]}&${EMAIL_ID}=${formData[EMAIL_ID]}`;

    // eslint-disable-next-line no-unused-vars
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }
  return (
    <div className="contactFormWrapper">
      <div className="formheader" />
      <div className="formcontact">
        {submit ? (
          <div className={sStyles.alignItemsCenter}>
            Thanks for the support! We&#39;ll get back to you soon.
          </div>
        ) : (
          <form className={waitlistForm} target="_self" onSubmit={handleSubmit}>
            <fieldset className={fieldset}>
              <label htmlFor={FIRST_NAME_ID}>First Name:</label>
              <input
                autoComplete
                required
                className={input}
                name={FIRST_NAME_ID}
                type="text"
                value={formData[FIRST_NAME_ID]}
                onChange={handleInputData(FIRST_NAME_ID)}
              />
            </fieldset>
            <fieldset className={fieldset}>
              <label htmlFor={LAST_NAME_ID}>Last Name:</label>
              <input
                autoComplete
                required
                className={input}
                name={LAST_NAME_ID}
                type="text"
                value={formData[LAST_NAME_ID]}
                onChange={handleInputData(LAST_NAME_ID)}
              />
            </fieldset>
            <fieldset className={fieldset}>
              <label htmlFor={EMAIL_ID}>E-mail:</label>
              <input
                autoComplete
                required
                className={input}
                name={EMAIL_ID}
                type="email"
                value={formData[EMAIL_ID]}
                onChange={handleInputData(EMAIL_ID)}
              />
            </fieldset>

            <WaitlistSubmitButton type="submit">JOIN THE WAITLIST</WaitlistSubmitButton>
          </form>
        )}
      </div>
    </div>
  );
}

const waitlistForm = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const input = css`
  outline: none;
  border: none;
  border-bottom: 2px solid ${GREEN};
  background-color: ${GRAY};
  display: flex;
  align-items: center;
  padding: 6px 12px;
  text-decoration: none;
  /* background: linear-gradient(${WHITE}, ${WHITE}) bottom / 0px 0.1em no-repeat;
  transition: 200ms background-size; */
  &:hover {
    /* background-size: 100% 0.1em; */
    border-bottom: 2px solid ${GREEN_HALF_OPAQUE};
  }
`;

const fieldset = css`
  border: none;
`;

// Source: https://bootcamp.uxdesign.cc/custom-google-form-interface-with-reactjs-5d6762d8fa65
