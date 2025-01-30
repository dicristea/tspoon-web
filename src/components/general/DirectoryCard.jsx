import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { BodyText, Heading3 } from '../../styles/styles';
import Paul from '../../assets/portraits/Paul_Portrait.jpg';
import Andrew from '../../assets/portraits/Andrew_Portrait.jpg';
import Forest from '../../assets/portraits/Forest_Portrait.jpg';
import Diana from '../../assets/portraits/Diana_Portrait.jpg';
import { GRAY, GREEN } from '../../styles/colors';

export default function DirectoryCard({ name }) {
  switch (name) {
    case 'Diana': {
      return (
        <OutlinedCard>
          <img
            alt="Diana Cristea"
            className={cardImage}
            cursor="pointer"
            href="https://linkedin.com/in/dicristea"
            src={Diana}
            target="_blank"
          />
          <Heading3 className={namePadding}>Diana Cristea</Heading3>
          <BodyText>Founding Software Developer</BodyText>
        </OutlinedCard>
      );
    }
    case 'Forest': {
      return (
        <OutlinedCard>
          <img
            alt="Forest Hu"
            className={cardImage}
            cursor="pointer"
            href="https://linkedin.com/in/foresthu"
            src={Forest}
            target="_blank"
          />
          <Heading3 className={namePadding}>Forest Hu</Heading3>
          <BodyText>Founder & Chief Technology Officer</BodyText>
        </OutlinedCard>
      );
    }
    case 'Andrew': {
      return (
        <OutlinedCard>
          <img
            alt="Andrew Gao"
            className={cardImage}
            cursor="pointer"
            href="https://www.linkedin.com/in/andrew-gao"
            src={Andrew}
            target="_blank"
          />
          <Heading3 className={namePadding}>Andrew Gao</Heading3>
          <BodyText>Founder & Chief Executive Officer</BodyText>
        </OutlinedCard>
      );
    }
    case 'Pauline': {
      return (
        <OutlinedCard>
          <img
            alt="Pauline Yang"
            className={cardImage}
            cursor="pointer"
            href="https://www.linkedin.com/in/pauline-hyejin-yang"
            src={Paul}
            target="_blank"
          />
          <Heading3 className={namePadding}>Pauline Yang</Heading3>
          <BodyText>Marketing Manager and Artist</BodyText>
        </OutlinedCard>
      );
    }
    default:
      return null;
  }
}

const OutlinedCard = styled.div`
  padding: 2rem 0;
  background-color: ${GRAY};
  outline: ${GREEN} solid 3px;
  border-radius: 6px;
  display: grid;
  height: min-content;
  width: 300px;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;

const cardImage = css`
  width: auto;
  height: 215px;
  @media (max-width: 500px) {
    width: auto;
    height: 180px;
  }
  border-radius: 50%;
`;

const namePadding = css`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
