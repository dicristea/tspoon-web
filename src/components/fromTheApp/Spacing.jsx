import { View } from 'react-native';
import React from 'react';

const MULTIPLIER = 12;

export default function Spacing({ top = 0, bottom = 0, left = 0, right = 0, style, children }) {
  return (
    <View
      style={[
        {
          paddingTop: top * MULTIPLIER,
          paddingBottom: bottom * MULTIPLIER,
          paddingLeft: left * MULTIPLIER,
          paddingRight: right * MULTIPLIER
        },
        style
      ]}
    >
      {children}
    </View>
  );
}
