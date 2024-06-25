import { styled } from '@linaria/react';
import { redirectGooglePlay } from '../../utils/utils';
import { GREEN, GREEN_LIGHT, WHITE } from '../../styles/colors';

export default function GreenButton() {
  return (
    <Container>
      <GreenOutlineBtn onClick={() => redirectGooglePlay()}>
        Start cooking on Google Play!
      </GreenOutlineBtn>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem !important;
  position: absolute;
`;

const GreenOutlineBtn = styled.a`
  background-color: ${GREEN_LIGHT};
  cursor: pointer;
  width: 180px;
  display: inline-block;
  padding: 0.75rem 1.25rem;
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
