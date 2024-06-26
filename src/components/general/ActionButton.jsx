import { styled } from '@linaria/react';
import { GREEN, GREEN_LIGHT, PINK, PINK_HALF_OPAQUE, WHITE } from '../../styles/colors';

export default function ActionButton({ color, text, onClick }) {
  return (
    <Container>
      {color === 'pink' ? (
        <AnimatedPinkButton onClick={onClick}>{text}</AnimatedPinkButton>
      ) : (
        <AnimatedGreenButton onClick={onClick}>{text}</AnimatedGreenButton>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem !important;
`;

const AnimatedPinkButton = styled.a`
  background-color: ${PINK_HALF_OPAQUE};
  cursor: pointer;
  width: 100%;
  display: inline-block;
  padding: 10pt 14pt;
  border: 1px solid ${PINK};
  border-radius: 10rem;
  color: ${WHITE};
  text-align: center;
  line-height: 1.5rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10rem;
    z-index: -2;
  }
  ::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: ${PINK};
    transition: all 0.3s;
    border-radius: 10rem;
    z-index: -1;
  }
  :hover {
    ::before {
      width: 100%;
    }
  }
`;

const AnimatedGreenButton = styled.a`
  background-color: ${GREEN_LIGHT};
  cursor: pointer;
  width: 100%;
  display: inline-block;
  padding: 10pt 14pt;
  border: 1px solid ${GREEN};
  border-radius: 10rem;
  color: ${WHITE};
  text-align: center;
  line-height: 1.5rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10rem;
    z-index: -2;
  }
  ::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: ${GREEN};
    transition: all 0.3s;
    border-radius: 10rem;
    z-index: -1;
  }
  :hover {
    ::before {
      width: 100%;
    }
  }
`;

// https://codepen.io/alticreation/pen/zBZwOP?editors=1100
