import { styled } from '@linaria/react';
import { css } from '@linaria/atomic';
import { GRAY, PINK } from '../../styles/colors';
import { BodyText, Button } from '../../styles/styles';
import logo from '../../images/logo.png';

export const navButton = styled(Button)`
  background-color: none;
  font-size: 10pt;
`;

export default function NavBar() {
  return (
    <div className={navBar}>
      <div className={left}>
        <Logo>
          <img alt="tspoon logo" src={logo} />
        </Logo>
        <navButton>
          <BodyText className={hoverUnderlineAnimation}>About</BodyText>
        </navButton>
        <navButton>
          <BodyText className={hoverUnderlineAnimation}>Blog</BodyText>
        </navButton>
      </div>
      <navButton className={right}>
        <BodyText className={hoverUnderlineAnimation}>Help</BodyText>
      </navButton>
    </div>
  );
}

const Logo = styled.div`
  img {
    width: 70px;
    height: auto;
  }
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
  z-index: 5;
  background-color: ${PINK};
  div {
    display: flex;
    align-items: center;
  }
`;

const hoverUnderlineAnimation = css`
  cursor: pointer;
  display: inline-block;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: var(--accent);
    transition: transform 0.2s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  /* Only way to show underline animation on mobile (no hover); however, line stays active until clicking off the button */
  @media only screen and (max-width: 400px) {
    &::after {
      transform: scaleX(1);
    }
  }
`;
