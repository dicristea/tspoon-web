import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { Link } from 'react-router-dom';
import { PINK, WHITE } from '../../styles/colors';
import pinkStemLogo from '../../assets/logo/White_Trans.svg';
import greenStemLogo from '../../assets/logo/White_Green_Stem_Trans.svg';
import sStyles, { darkBackgroundColor } from '../../styles/styles';

export default function NavBar({ greenColor }) {
  return (
    <nav className={navBar} style={{ backgroundColor: greenColor ? darkBackgroundColor : PINK }}>
      <Link to="/">
        <Img alt="Tspoon logo" src={greenColor ? pinkStemLogo : greenStemLogo} />
      </Link>
      <div className="right">
        <Link className={hoverChange} style={sStyles.linkStyle} to="/about">
          About
        </Link>
        <Link className={hoverChange} style={sStyles.linkStyle} to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}

const Img = styled.img`
  width: auto;
  height: 2rem;
`;

const hoverChange = css`
  color: ${WHITE};
  text-decoration: none;
  padding-bottom: 0.2em;
  background: linear-gradient(${WHITE}, ${WHITE}) bottom / 0 0.1em no-repeat;
  transition: 200ms background-size;
  &:hover {
    background-size: 100% 0.1em;
  }
`;

const navBar = css`
  padding: 2rem 3rem;
  @media (max-width: 650px) {
    padding: 4vw;
  }
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  ${sStyles.justifyContentSpaceBetween}
  z-index: 1000;
  background-color: ${PINK};
  div {
    display: flex;
    align-items: center;
  }
  .right {
    gap: 1rem;
  }
`;

// const hoverUnderlineAnimation = css`
//   cursor: pointer;
//   display: inline-block;
//   position: relative;

//   &::after {
//     content: '';
//     position: absolute;
//     width: 100%;
//     transform: scaleX(0);
//     height: 1px;
//     bottom: 0;
//     left: 0;
//     background-color: var(--accent);
//     transition: transform 0.2s ease-out;
//   }

//   &:hover::after {
//     transform: scaleX(1);
//   }

//   /* Only way to show underline animation on mobile (no hover); however, line stays active until clicking off the button */
//   @media only screen and (max-width: 400px) {
//     &::after {
//       transform: scaleX(1);
//     }
//   }
// `;
