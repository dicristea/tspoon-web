import React from 'react';

import FastImage from 'react-native-fast-image';

export default function ImageWithPlaceholder({ defaultImage, style, source }) {
  return (
    <FastImage resizeMode={FastImage.resizeMode.contain} source={defaultImage} style={style}>
      <FastImage source={source} style={style} />
    </FastImage>
  );
}
