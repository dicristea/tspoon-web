import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { Link } from 'react-router-dom';
import { GREEN } from '../../styles/colors';
import pinkStemLogo from '../../assets/logo/White_Trans.svg';
import { hoverUnderline } from '../../styles/styles';
import useScreenSize from '../../utils/useScreenSize';
import ActionButton from './ActionButton';

export default function NavBar({ signUpRef }) {
  const handleSignUpScroll = () => signUpRef.current.scrollIntoView({ behavior: 'smooth' });
  const screenSize = useScreenSize();

  return (
    <nav className={navBar}>
      <Link to="/">
        <Img alt="Tspoon logo" src={pinkStemLogo} />
      </Link>
      {screenSize.width > 700 ? (
        <div className="right">
          <Link className={hoverUnderline} style={{ paddingBottom: '0.2em' }} to="/about">
            About
          </Link>
          <Link className={hoverUnderline} style={{ paddingBottom: '0.2em' }} to="/contact">
            Contact
          </Link>
          <ActionButton color="pink" text="SIGN UP" onClick={() => handleSignUpScroll()} />
        </div>
      ) : (
        <div>
          <ActionButton color="pink" text="SIGN UP" onClick={() => handleSignUpScroll()} />
        </div>
      )}
    </nav>
  );
}

const Img = styled.img`
  width: auto;
  height: 2rem;
`;

const navBar = css`
  font-weight: 400;
  background-color: ${GREEN};
  padding: 2rem 3rem;
  @media (max-width: 650px) {
    padding: 4vw;
  }
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  z-index: 1000;
  div {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .right {
    gap: 4vw;
  }
`;

//   /* Only way to show underline animation on mobile (no hover); however, line stays active until clicking off the button */
//   @media only screen and (max-width: 400px) {
//     &::after {
//       transform: scaleX(1);
//     }
//   }
// `;
