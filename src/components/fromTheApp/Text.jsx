import React, { useContext } from 'react';
import { StyleSheet, Text as ExtText } from 'react-native';
import { WHITE } from '../../colors';
import { AppContext } from '../../utils/context';
import { darkFontColor, lightFontColor } from '../../styles';

export default function Text(props) {
  const { darkMode } = useContext(AppContext);

  const color = darkMode ? darkFontColor : lightFontColor;
  const style = StyleSheet.compose(props?.style || {}, {
    color: props?.overrideColor ? WHITE : color
  });

  return <ExtText {...props} style={style} />;
}
