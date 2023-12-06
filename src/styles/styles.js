import '@fontsource/source-sans-pro'; // Defaults to weight 400
import '@fontsource/source-sans-pro/400.css'; // Specify weight
import '@fontsource/source-sans-pro/400-italic.css'; // Specify weight and style
import '@fontsource/source-sans-pro/600.css'; // Specify weight and style
import '@fontsource/source-sans-pro/200.css'; // Specify weight

import { styled } from '@linaria/react';
import { css } from '@linaria/atomic';
import { BEIGE, BLACK, GRAY, GREEN, GREEN_LIGHT, PINK, WHITE } from './colors';

export const smallFontSize = `10pt`;
export const smallHeadingFontSize = `12pt`;
export const bodyFontSize = `14pt`;
export const heading3FontSize = `20pt`;
export const heading2FontSize = `24pt`;
export const heading1FontSize = '32pt';
export const titleFontSize = `40pt`;
export const iconSize = '36px';
export const darkBackgroundColor = GREEN;
export const darkTransBackgroundColor = GREEN_LIGHT;
export const lightBackgroundColor = GRAY;
export const darkFontColor = WHITE;
export const lightFontColor = GREEN;
export const appTopPadding = '100';
export const borderRadius = '16pt';

export const placeholderImage = css`
  border: 1px ${WHITE} solid;
  background-color: ${WHITE};
  width: 250px;
`;

// TODO: technically Spacing cannot reach 20px, look to unify spacing
export const horizontalPadding = '32px';

export const h2PaddingBottom = css`
  padding-bottom: ${heading2FontSize};
`;

export const h3PaddingBottom = css`
  padding-bottom: ${heading3FontSize};
`;
export const textPaddingBottom = css`
  padding-bottom: ${bodyFontSize};
`;

// TEMPORARY screen width solution
export const screenWidth = window.innerWidth;

export const GreenBackground = css`
  background-color: ${darkTransBackgroundColor};
`;

export const Title = styled.h1`
  font-family: 'Source Sans Pro';
  font-weight: 600;
  font-size: ${titleFontSize};
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

export const BodyText = styled.p`
  font-family: 'Source Sans Pro';
  font-weight: 200;
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
  gap: 6vw;
  padding: 4rem 0;
  div {
    max-width: 300px;
  }
  @media (max-width: 700px) {
    padding: 3rem 3rem;
    display: grid;
  }
`;

export const SmallSection = styled(Section)`
  flex-direction: column;
  color: ${WHITE};
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
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: BEIGE,
    color: WHITE,
    margin: '0',
    border: 'none',
    justifyContent: 'center',
    borderRadius,
    padding: '4pt 10pt',
    textDecoration: 'none',
    cursor: 'pointer'
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
  heading1: {
    fontFamily: 'Source Sans Pro',
    fontWeight: '600',
    fontSize: heading1FontSize
  },
  heading2: {
    fontFamily: 'SourceSans3_600SemiBold',
    fontSize: heading2FontSize
  },
  heading3: {
    fontFamily: 'SourceSans3_400Regular',
    fontSize: heading3FontSize
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
  normalImageSize: {
    height: 172,
    width: 172
  },
  placeholderImage: {
    border: `1px ${WHITE} solid`,
    backgroundColor: `${WHITE}`,
    width: '80px'
  },
  smallImageSize: {
    height: 60,
    width: 60
  },
  socialButtons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8vw',
    paddingTop: '2rem'
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

export const Button = styled.button`
  display: flex;
  ${sStyles.button}
  gap: 0.2rem;
  img {
    width: auto;
    height: 1rem;
  }
`;

export const ImgButton = styled.a`
  display: flex;
  margin: 0;
  border-radius: 0;
  border: none;
  background: none;
  padding: 0;
  text-decoration: none;
  cursor: pointer;
  img {
    width: auto;
    height: 2rem;
  }
`;

export const Heading1 = styled.h1`
  ${sStyles.heading1}
`;
