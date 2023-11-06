import '@fontsource/source-sans-pro'; // Defaults to weight 400
import '@fontsource/source-sans-pro/400.css'; // Specify weight
import '@fontsource/source-sans-pro/400-italic.css'; // Specify weight and style
import '@fontsource/source-sans-pro/600.css'; // Specify weight and style
import '@fontsource/source-sans-pro/200.css'; // Specify weight

import { styled } from '@linaria/react';
// import { css } from '@linaria/atomic';
import { css } from '@linaria/atomic';
import { BEIGE, BLACK, GRAY, GREEN, GREEN_HALF_OPAQUE, GREEN_LIGHT, PINK, WHITE } from './colors';

export const smallFontSize = `10pt`;
export const smallHeadingFontSize = `12pt`;
export const bodyFontSize = `14pt`;
export const heading3FontSize = `20pt`;
export const heading2FontSize = `24pt`;
export const heading1FontSize = '32pt';
export const titleFontSize = `40pt`;
export const iconSize = '36px';
export const darkBackgroundColor = GREEN;
export const darkTransBackgroundColor = GREEN_HALF_OPAQUE;
export const lightBackgroundColor = GRAY;
export const darkFontColor = WHITE;
export const lightFontColor = GREEN;
export const appTopPadding = '100';
export const borderRadius = 16;
// TODO: technically Spacing cannot reach 20px, look to unify spacing
export const horizontalPadding = 20;

// TEMPORARY screen width solution
export const screenWidth = window.innerWidth;

export const Title = styled.h1`
  font-family: 'Source Sans Pro';
  font-weight: 600;
  font-size: ${titleFontSize};
`;

export const Heading2 = styled.h2`
  font-family: 'Source Sans Pro';
  font-weight: 600;
  font-size: ${heading2FontSize};
`;

export const Heading3 = styled.h3`
  font-family: 'Source Sans Pro';
  font-weight: 600;
  font-size: ${heading3FontSize};
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

export const MobileFlow = css``;

export const Section = styled.div`
  background-color: ${GRAY};
  color: ${BLACK};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  justify-items: center;
  gap: 6vw;
  padding: 3rem 8rem;
  div {
    max-width: 300px;
  }
  @media (max-width: 600px) {
    padding: 3rem 3rem;
    flex-direction: column;
    align-items: center;
  }
`;

export const PinkSection = styled(Section)`
  background-color: ${PINK};
  flex-direction: column;
  color: ${WHITE};
`;

const sStyles = {
  zIndexLowest: { zIndex: -1000, elevation: -1000 },
  zIndexLower: { zIndex: -200, elevation: -200 },
  zIndexHighest: { zIndex: 1000, elevation: 1000 },
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
  backgroundBeige: {
    backgroundColor: BEIGE
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
  smallIcon: {
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
  xLargeIcon: {
    color: WHITE,
    fontSize: 80,
    height: 80,
    width: 80,
    fill: WHITE
  },
  lightSmallIcon: {
    color: GREEN,
    fontSize: 20,
    height: 20,
    width: 20,
    fill: GREEN
  },
  lightMediumIcon: {
    color: GREEN,
    fontSize: 32,
    height: 32,
    width: 32,
    fill: GREEN
  },
  lightXLargeIcon: {
    color: GREEN,
    fontSize: 80,
    height: 80,
    width: 80,
    fill: GREEN
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
  darkNormalEmptyImage: {
    borderColor: GREEN_LIGHT,
    borderStyle: 'dashed',
    borderWidth: 4,
    borderRadius: 8,
    padding: 40 // determines size of icon
  },
  lightNormalEmptyImage: {
    borderColor: GRAY,
    borderStyle: 'dashed',
    borderWidth: 4,
    borderRadius: 8,
    padding: 40 // determines size of icon
  },
  errorNormalEmptyImage: {
    borderColor: PINK,
    borderStyle: 'dashed',
    borderWidth: 4,
    borderRadius: 8,
    padding: 40 // determines size of icon
  },
  smallImageSize: {
    height: 60,
    width: 60
  },
  smallEmptyImage: {
    fill: WHITE,
    borderColor: GREEN_LIGHT,
    borderStyle: 'dashed',
    borderWidth: 4,
    borderRadius: 4,
    padding: 8 // determines size of icon
  },
  errorSmallEmptyImage: {
    fill: WHITE,
    borderColor: PINK,
    borderStyle: 'dashed',
    borderWidth: 4,
    borderRadius: 4,
    padding: 8 // determines size of icon
  },
  smallTag: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: BEIGE,
    borderRadius: 16,
    justifyContent: 'center',
    paddingHorizontal: 8
  },
  submitButton: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: BEIGE,
    justifyContent: 'center',
    borderRadius: '12px',
    paddingHorizontal: 20,
    paddingVertical: 4,
    textDecoration: 'none',
    cursor: 'pointer'
  },
  submitText: {
    color: WHITE,
    fontFamily: 'SourceSans3_500Medium',
    fontSize: heading2FontSize
  },
  tag: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: BEIGE,
    borderRadius: 32,
    justifyContent: 'center',
    marginRight: 4,
    marginVertical: 2,
    paddingHorizontal: 12,
    paddingVertical: 6
  },
  tagNoMargin: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: BEIGE,
    borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  textInputErrorView: {
    backgroundColor: PINK,
    borderRadius: 16,
    paddingLeft: 4,
    paddingRight: 4
  },
  textInputNormalView: {
    paddingLeft: 4,
    paddingRight: 4
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
  },
  zIndex1: {
    zIndex: 1,
    elevation: 1
  },
  zTop: {
    zIndex: 1000,
    elevation: 1000
  }
};

export default sStyles;

export const Button = styled.button`
  margin: 0;
  cursor: pointer;
  display: flex;
  border: none;
  padding: 4pt 8pt;
  color: ${WHITE};
  ${sStyles.submitButton}
  gap:2vw;
  img {
    width: 17px;
    height: auto;
  }
`;

export const Heading1 = styled.h1`
  ${sStyles.heading1}
`;
