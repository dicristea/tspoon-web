import React from 'react';
import Svg, { Path } from 'react-native-svg';

function HamburgerMenuIcon(props) {
  return (
    <Svg id="Layer_1" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d="m121.94,242.42h755.87c32.09,0,58.1-26.01,58.1-58.1s-26.01-58.1-58.1-58.1H121.94c-32.09,0-58.1,26.01-58.1,58.1s26.01,58.1,58.1,58.1Z" />
      <Path d="m878.06,440.69H122.19c-32.09,0-58.1,26.01-58.1,58.1s26.01,58.1,58.1,58.1h755.87c32.09,0,58.1-26.01,58.1-58.1s-26.01-58.1-58.1-58.1Z" />
      <Path d="m878.06,755.16H122.19c-32.09,0-58.1,26.01-58.1,58.1s26.01,58.1,58.1,58.1h755.87c32.09,0,58.1-26.01,58.1-58.1s-26.01-58.1-58.1-58.1Z" />
    </Svg>
  );
}

export default HamburgerMenuIcon;
