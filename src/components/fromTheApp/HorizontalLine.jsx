import { StyleSheet, View } from 'react-native';
import React from 'react';
import { BEIGE } from '../../colors';
import { SCREEN_WIDTH } from '../../consts';
import Spacing from './Spacing';

export default function HorizontalLine({ fullWidth = false, width }) {
  return (
    <Spacing bottom={1} top={1}>
      <View style={styles.horizontalLine} width={fullWidth ? SCREEN_WIDTH : width} />
    </Spacing>
  );
}

const styles = StyleSheet.create({
  horizontalLine: {
    borderBottomColor: BEIGE,
    borderBottomWidth: 1
  }
});
