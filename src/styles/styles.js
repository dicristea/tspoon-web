import '@fontsource/source-sans-pro'; // Defaults to weight 400
import '@fontsource/source-sans-pro/400.css'; // Specify weight
import '@fontsource/source-sans-pro/400-italic.css'; // Specify weight and style
import '@fontsource/source-sans-pro/600.css'; // Specify weight and style
import '@fontsource/source-sans-pro/200.css'; // Specify weight

import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { BLACK, GRAY, GREEN, PINK, PINK_HALF_OPAQUE, WHITE } from './colors';

export const titleFontSize = `70pt`;
export const heading1FontSize = '32pt';
export const heading2FontSize = `24pt`;
export const heading3FontSize = `20pt`;
export const heading4FontSize = `16pt`;
export const smallHeadingFontSize = `14pt`;
export const bodyFontSize = `14pt`;
export const smallFontSize = `10pt`;
export const iconSize = '36px';
export const lightBackgroundColor = GRAY;
export const darkFontColor = WHITE;
export const lightFontColor = GREEN;
export const appTopPadding = '100';
export const borderRadius = '16pt';
export const sectionGap = '4rem';

export const placeholderImage = css`
  border: 1px ${WHITE} solid;
  background-color: ${WHITE};
  width: 250px;
`;

// TODO: technically Spacing cannot reach 20px, look to unify spacing
export const horizontalPadding = '32px';

export const h1PaddingBottom = css`
  padding-bottom: ${heading1FontSize};
`;

export const h2PaddingBottom = css`
  padding-bottom: ${heading2FontSize};
`;

export const h3PaddingBottom = css`
  padding-bottom: ${heading3FontSize};
`;

export const h4PaddingBottom = css`
  padding-bottom: ${heading4FontSize};
`;

export const textPaddingBottom = css`
  padding-bottom: ${bodyFontSize};
`;

export const normalImageSize = css`
  width: auto;
  height: 300px;
  @media (max-width: 500px) {
    width: auto;
    height: 300px;
  }
`;

export const bigImageSize = css`
  width: auto;
  height: 450px;
  @media (max-width: 500px) {
    width: auto;
    height: 300px;
  }
`;

export const GreenBackground = css`
  background-color: ${GREEN};
`;

export const PinkBackground = css`
  background-color: ${PINK};
`;

export const Title = styled.h1`
  font-family: 'Source Sans Pro';
  font-weight: 700;
  font-size: ${titleFontSize};
  text-align: center;
  line-height: 9rem;
  padding: 0;
  margin: 0;
  @media (max-width: 1100px) {
    font-size: 55pt;
    line-height: 6rem;
  }
  @media (max-width: 870px) {
    font-size: 42pt;
    line-height: 5rem;
  }
  @media (max-width: 550px) {
    font-size: 35pt;
    line-height: 4rem;
  }
`;

export const Heading1 = styled.h1`
  margin: 0;
  font-family: 'Source Sans Pro';
  font-weight: 600;
  font-size: ${heading1FontSize};
  color: ${GREEN};
`;

export const Heading2 = styled.h2`
  margin: 0;
  font-family: 'Source Sans Pro';
  font-weight: 600;
  font-size: ${heading2FontSize};
  color: ${GREEN};
`;

export const Heading3 = styled.h3`
  margin: 0;
  font-family: 'Source Sans Pro';
  font-weight: 600;
  font-size: ${heading3FontSize};
  color: ${GREEN};
`;

export const Heading4 = styled.h4`
  margin: 0;
  font-family: 'Source Sans Pro';
  font-weight: 400;
  font-size: ${heading4FontSize};
  color: ${GREEN};
`;

export const BodyText = styled.p`
  font-family: 'Source Sans Pro';
  font-weight: 300;
  margin: 0;
  font-size: ${bodyFontSize};
`;

export const SmallHeading = styled.h3`
  font-family: 'Source Sans Pro';
  font-weight: 400;
  margin: 0;
  font-size: ${smallHeadingFontSize};
`;

export const SmallText = styled.div`
  font-family: 'Source Sans Pro';
  font-weight: 300;
  margin: 0;
  font-size: ${smallFontSize};
`;

export const Section = styled.div`
  background-color: ${GRAY};
  color: ${BLACK};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-items: center;
  gap: 5vw;
  div {
    max-width: 300px;
  }
  @media (max-width: 700px) {
    display: grid;
  }
`;

export const TextSection = styled.div`
  padding: 64px 80px;
  text-align: left;
  color: ${BLACK};
  max-width: 850px;
  @media (max-width: 550px) {
    padding: 64px 40px;
  }
`;

export const AnchorTag = styled.a`
  text-decoration: none;
`;

export const hoverUnderline = css`
  color: white;
  text-decoration: none;
  background: linear-gradient(${WHITE}, ${WHITE}) bottom / 0 0.1em no-repeat;
  transition: 200ms background-size;
  &:hover {
    background-size: 100% 0.1em;
  }
`;

export const greenHoverUnderline = css`
  color: ${GREEN} !important;
  padding: 8pt 8pt !important;
  font-size: 1rem;
  border-radius: 0 !important;
  background-color: ${GRAY};
  text-decoration: none;
  background: linear-gradient(${GREEN}, ${GREEN}) bottom / 0 0.13em no-repeat;
  transition: 150ms background-size;
  &:hover {
    background-size: 100% 0.13em;
  }
`;

export const List = styled.ul`
  text-decoration: none;
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5rem;
  margin: 0;
  font-size: ${bodyFontSize};
  li {
    padding-bottom: 0.2rem;
  }
`;

export const OrderedList = styled.ol`
  margin: 0;
  font-size: ${bodyFontSize};
  padding-left: 2rem;
  margin: 0;
  line-height: 1.5rem;
  li {
    padding-bottom: 0.2rem;
  }
`;

export const fieldset = css`
  border: none;
  display: flex;
  gap: 10px;
  align-items: flex-end;
  justify-content: center;
`;

export const Button = styled.button`
  cursor: pointer;
  z-index: 1000;
  padding: 10pt 14pt;
  display: flex;
  border: none;
  color: WHITE;
  gap: 0.2rem;
  align-items: center;
  align-self: center;
  margin: 0;
  justify-content: center;
  border-radius: ${borderRadius};
  text-decoration: none;
  img {
    width: auto;
    height: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem !important;
`;

export const greenButton = css`
  background-color: ${GRAY};
  color: ${GREEN};
  font-size: ${smallFontSize};
  font-weight: 500;
  border: 1px solid ${GREEN};
  &:hover {
    color: ${GREEN};
    background-color: ${GRAY};
    border: 2px solid ${GREEN};
  }
`;

export const pinkButton = css`
  background-color: ${PINK};
  color: white;
  font-size: ${smallFontSize};
  border: 1px solid ${PINK};
  &:hover {
    background-color: ${PINK_HALF_OPAQUE};
  }
`;

export const ImgButton = styled.a`
  display: flex;
  flex-direction: column;
  margin: 0;
  border: none;
  background: none;
  padding: 6px;
  text-decoration: none;
  border-radius: 16px;
  cursor: pointer;
  img {
    width: auto;
    height: 2.5rem;
  }
`;

export const formSubmitted = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  gap: 0.5rem;
`;

export const LegalPageBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${GRAY};
`;

const sStyles = {
  zIndexLowest: { zIndex: -1000 },
  zIndexLower: { zIndex: -200 },
  zIndexHigher: { zIndex: 200 },
  zIndexHighest: { zIndex: 1000 },
  alignItemsCenter: {
    alignItems: 'center'
  },
  alignItemsEnd: {
    alignItems: 'flex-end'
  },
  alignSelfCenter: {
    alignSelf: 'center'
  },
  typeaheadNegativeMargin: {
    marginTop: -200
  },
  alignSelfEnd: {
    alignSelf: 'flex-end'
  },
  alignSelfStart: {
    alignSelf: 'flex-start'
  },
  alignTextCenter: {
    textAlign: 'center'
  },
  backgroundPink: {
    backgroundColor: PINK
  },
  backgroundGreen: {
    backgroundColor: GREEN
  },
  bodyFont: {
    fontFamily: 'Source Sans Pro',
    fontSize: bodyFontSize
  },
  overrideFontColor: {
    color: WHITE
  },
  capitalize: {
    textTransform: 'capitalize'
  },
  downloadButtons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '4vw',
    paddingTop: '2rem'
  },
  flex: {
    flex: 1
  },
  flexCenter: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column'
  },
  flexColumnCenter: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  flexGrow: {
    flexGrow: 1
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  flexRowCenter: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row'
  },
  flexWrap: {
    flexWrap: 'wrap'
  },
  font5: {
    fontFamily: 'SourceSans3_500Medium'
  },
  font6: {
    fontFamily: 'SourceSans3_600SemiBold'
  },
  gap12: {
    gap: 12
  },
  gap16: {
    gap: 16
  },
  gap20: {
    gap: 20
  },
  gap4: {
    gap: 4
  },
  gap30: {
    gap: 30
  },
  gap40: {
    gap: 40
  },
  gap8: {
    gap: 8
  },
  gapBetween: {
    gap: 4
  },
  whiteSmallIcon: {
    color: WHITE,
    fontSize: 20,
    height: 20,
    width: 20,
    fill: WHITE
  },
  mediumIcon: {
    color: WHITE,
    fontSize: 32,
    height: 32,
    width: 32,
    fill: WHITE
  },
  pinkSmallIcon: {
    color: PINK,
    fontSize: 20,
    height: 20,
    width: 20,
    fill: PINK
  },
  pnkMediumIcon: {
    color: PINK,
    fontSize: 32,
    height: 32,
    width: 32,
    fill: PINK
  },
  linkStyle: {
    textDecoration: 'none',
    color: WHITE
  },
  justifyContentCenter: {
    justifyContent: 'center'
  },
  justifyContentFlexEnd: {
    justifyContent: 'flex-end'
  },
  justifyContentFlexStart: {
    justifyContent: 'flex-start'
  },
  justifyContentSpaceBetween: {
    justifyContent: 'space-between'
  },
  justifyContentSpaceEvenly: {
    justifyContent: 'space-evenly'
  },
  marginTopAuto: {
    marginTop: 'auto'
  },
  noShrink: {
    flexShrink: 0
  },
  imageStyle: {
    alignSelf: 'center',
    display: 'flex',
    height: '15px',
    width: 'auto'
  },
  textAlignCenter: {
    textAlign: 'center'
  },
  titleFont: {
    alignSelf: 'center',
    flexDirection: 'row',
    fontFamily: 'Source Sans Pro',
    fontWeight: 600,
    fontSize: titleFontSize
  },
  width100: {
    width: '100%'
  },
  width80: {
    width: '80%'
  }
};

export default sStyles;
