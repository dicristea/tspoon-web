import React from 'react';

import { heading2FontSize } from '../../styles/styles';
import Text from './Text';

export default function EmptySection() {
  return (
    <div style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Nothing here yet!</Text>
    </div>
  );
}

const styles = {
  emptyContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  emptyText: {
    alignSelf: 'center',
    fontFamily: 'SourceSans3_500Medium',
    fontSize: heading2FontSize
  }
};
