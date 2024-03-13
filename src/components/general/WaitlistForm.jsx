/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { css } from '@linaria/atomic';
import sStyles, { Button, Heading3 } from '../../styles/styles';
import {
  BEIGE,
  GRAY,
  GREEN,
  GREEN_HALF_OPAQUE,
  PINK,
  PINK_HALF_OPAQUE,
  WHITE
} from '../../styles/colors';

export default function WaitlistForm({ location, sectionColor }) {
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
  return (
    <div className={formWrapper}>
      <Heading3 className={formHeader} id="waitlist">
        Something&apos;s cooking!
      </Heading3>
      <div className="formcontact">
        {submit ? (
          <div className={sStyles.alignItemsCenter}>
            Thanks for the support! We&#39;ll get back to you soon.
          </div>
        ) : (
          <form className={waitlistForm} target="_self" onSubmit={handleSubmit}>
            <fieldset className={fieldset}>
              <label htmlFor={NAME_ID}>Name:</label>
              <input
                autoComplete
                required
                className={location === 'section' ? sectionInput : input}
                id={NAME_ID}
                name={NAME_ID}
                type="text"
                value={formData[NAME_ID]}
                onChange={handleInputData(NAME_ID)}
              />
            </fieldset>
            <fieldset className={fieldset}>
              <label htmlFor={EMAIL_ID}>E-mail:</label>
              <input
                autoComplete
                required
                className={location === 'section' ? sectionInput : input}
                id={EMAIL_ID}
                name={EMAIL_ID}
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

const greenButton = css`
  background-color: ${GREEN};
  border: 1px solid ${GREEN};
  &:hover {
    color: white;
    background-color: ${GREEN_HALF_OPAQUE};
  }
`;

const pinkButton = css`
  background-color: ${PINK};
  border: 1px solid ${PINK};
  &:hover {
    color: white;
    background-color: ${PINK_HALF_OPAQUE};
  }
`;

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
  align-items: center;
  gap: 30px;
  color: ${WHITE};
`;

const sectionInput = css`
  outline: none;
  border: none;
  border-bottom: 2px solid ${WHITE};
  background: transparent;
  display: flex;
  align-items: center;
  padding: 4px 2px;
  text-decoration: none;
  &:-webkit-autofill
    + &:-webkit-autofill:hover
    + &:-webkit-autofill:focus
    + &:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${GRAY};
    transition: background-color 5000s ease-in-out 0s;
    box-shadow: inset 0 0 20px 20px #23232329;
  }
  &:hover {
    border-bottom: 2px solid ${BEIGE};
  }
`;

const input = css`
  outline: none;
  border: none;
  border-bottom: 2px solid ${GREEN};
  background: transparent;
  display: flex;
  align-items: center;
  padding: 4px 2px;
  text-decoration: none;
  &:-webkit-autofill
    + &:-webkit-autofill:hover
    + &:-webkit-autofill:focus
    + &:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${GRAY};
    transition: background-color 5000s ease-in-out 0s;
    box-shadow: inset 0 0 20px 20px #23232329;
  }
  &:hover {
    border-bottom: 2px solid ${BEIGE};
  }
`;

const fieldset = css`
  border: none;
  display: flex;
  gap: 10px;
  align-items: flex-end;
`;

// Source: https://bootcamp.uxdesign.cc/custom-google-form-interface-with-reactjs-5d6762d8fa65
