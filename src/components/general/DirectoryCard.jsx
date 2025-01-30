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
          <Link
            cursor="pointer"
            href="https://www.linkedin.com/in/dicristea"
            rel="noreferrer"
            target="_blank"
          >
            <img alt="Diana Cristea" className={cardImage} src={Diana} />
          </Link>
          <Link
            cursor="pointer"
            href="https://www.linkedin.com/in/dicristea"
            rel="noreferrer"
            target="_blank"
          >
            <Heading3 className={namePadding}>Diana Cristea</Heading3>
          </Link>
          <BodyText className={textPadding}> Software Engineer & Web Developer</BodyText>
        </OutlinedCard>
      );
    }
    case 'Forest': {
      return (
        <OutlinedCard>
          <Link
            cursor="pointer"
            href="https://www.linkedin.com/in/foresthu"
            rel="noreferrer"
            target="_blank"
          >
            <img alt="Forest Hu" className={cardImage} src={Forest} />
          </Link>
          <Link
            cursor="pointer"
            href="https://www.linkedin.com/in/foresthu"
            rel="noreferrer"
            target="_blank"
          >
            <Heading3 className={namePadding}>Forest Hu</Heading3>
          </Link>
          <BodyText className={textPadding}>Founder & Chief Technology Officer</BodyText>
        </OutlinedCard>
      );
    }
    case 'Andrew': {
      return (
        <OutlinedCard>
          <Link
            cursor="pointer"
            href="https://www.linkedin.com/in/andrew-gao"
            rel="noreferrer"
            target="_blank"
          >
            <img alt="Andrew Gao" className={cardImage} src={Andrew} />
          </Link>
          <Link
            cursor="pointer"
            href="https://www.linkedin.com/in/andrew-gao"
            rel="noreferrer"
            target="_blank"
          >
            <Heading3 className={namePadding}>Andrew Gao</Heading3>
          </Link>
          <BodyText className={textPadding}>Founder & Chief Executive Officer</BodyText>
        </OutlinedCard>
      );
    }
    case 'Pauline': {
      return (
        <OutlinedCard>
          <Link
            cursor="pointer"
            href="https://www.linkedin.com/in/pauline-hyejin-yang"
            rel="noreferrer"
            target="_blank"
          >
            <img alt="Pauline Yang" className={cardImage} src={Paul} />
          </Link>
          <Link
            cursor="pointer"
            href="https://www.linkedin.com/in/pauline-hyejin-yang"
            rel="noreferrer"
            target="_blank"
          >
            <Heading3 className={namePadding}>Pauline Yang</Heading3>
          </Link>
          <BodyText className={textPadding}>Social Media Manager & Content Creator</BodyText>
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
  height: 375px;
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
  cursor: 'pointer';
  padding-top: 1rem;
  text-decoration: none;
  padding-bottom: 0.2rem;
  background: linear-gradient(${GREEN}, ${GREEN}) bottom / 0 0.08em no-repeat;
  transition: 200ms background-size;
  &:hover {
    background-size: 100% 0.08em;
  }
`;

const textPadding = css`
  padding-top: 0.5rem;
  text-align: center;
`;

const Link = styled.a`
  text-decoration: none;
`;
