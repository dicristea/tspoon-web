import { styled } from '@linaria/react';
import { css } from '@linaria/atomic';
import { Link } from 'react-router-dom';
import { GRAY, PINK } from '../../styles/colors';
import logo from '../../assets/logo/logo.png';
import sStyles, { darkBackgroundColor } from '../../styles/styles';
// import About from './About';

// export const NavButton = styled(Button)`
//   background-color: none;
//   font-size: 10pt;
// `;

export default function NavBar({ greenColor }) {
  return (
    <div className={navBar} style={{ 'background-color': greenColor ? darkBackgroundColor : PINK }}>
      <div className={left}>
        <Link to="/tspoon-web/">
          <Img alt="tspoon logo" src={logo} />
        </Link>
        <Link style={sStyles.linkStyle} to="/tspoon-web/about">
          About
        </Link>
        <Link style={sStyles.linkStyle} to="/tspoon-web/blog">
          Blog
        </Link>
        {/* <div className={hoverUnderlineAnimation}>Blog</div> */}
      </div>
      <Link className={right} style={sStyles.linkStyle} to="/tspoon-web/contact-us">
        Contact Us
      </Link>
      {/* <div className={[right]}>Contact Us</div> */}
    </div>
  );
}

// const GreenHeader = css`
//   background-color: ${GREEN};
// `;

// const PinkHeader = css`
//   background-color: ${GREEN};
// `;

const Img = styled.img`
  width: 70px;
  height: auto;
  background-color: ${GRAY};
`;

const left = css`
  gap: 4vw;
`;
const right = css`
  margin-left: auto;
`;

const navBar = css`
  padding: 4vw;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  z-index: 1000;
  background-color: ${PINK};
  div {
    display: flex;
    align-items: center;
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
