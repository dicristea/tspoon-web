import { styled } from '@linaria/react';
import { redirectGooglePlay } from '../../utils/utils';
import { GREEN, WHITE } from '../../styles/colors';

export default function GreenButton() {
  return (
    <Container>
      <GreenOutlineBtn onClick={() => redirectGooglePlay()}>
        <svg className="border" height="60px" viewBox="0 0 180 60" width="180px">
          <polyline className="bg-line" points="179,1 179,59 1,59 1,1 179,1" />
          <polyline className="hl-line" points="179,1 179,59 1,59 1,1 179,1" />
        </svg>
        <span>Start cooking on Google Play!</span>
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

const GreenOutlineBtn = styled.button`
  width: 180px;
  height: 60px;
  cursor: pointer;
  background: transparent;
  border: 1px solid ${GREEN};
  outline: none;
  transition: 1s ease-in-out;
  span {
    color: ${GREEN};
    font-size: 18px;
    font-weight: 100;
  }
  svg {
    position: absolute;
    left: 0;
    top: 0;
    fill: none;
    stroke: #fff;
    stroke-dasharray: 150 480;
    stroke-dashoffset: 150;
    transition: 1s ease-in-out;
  }
  &:hover {
    transition: 1s ease-in-out;
    background: ${GREEN};
    span {
      transition: 1s ease-in-out;
      color: ${WHITE};
    }
    svg {
      stroke-dashoffset: -480;
    }
  }
`;
