import { Modal as ExtModal, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import React, { useContext } from 'react';
import { BLACK_HALF_OPAQUE } from '../../colors';
import sStyles, { darkBackgroundColor, lightBackgroundColor } from '../../styles';
import { AppContext } from '../../utils/context';

function Modal({ visible, onClose, children }) {
  const { darkMode } = useContext(AppContext);

  return (
    <ExtModal
      hardwareAccelerated
      statusBarTranslucent
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <View
        style={[darkMode ? styles.darkInnerContainer : styles.lightInnerContainer, sStyles.flex]}
      >
        {children}
      </View>
    </ExtModal>
  );
}

const styles = StyleSheet.create({
  darkInnerContainer: {
    backgroundColor: darkBackgroundColor,
    borderRadius: 20,
    marginBottom: 90,
    marginHorizontal: 24,
    marginTop: 80
  },
  lightInnerContainer: {
    backgroundColor: lightBackgroundColor,
    borderRadius: 20,
    marginBottom: 90,
    marginHorizontal: 24,
    marginTop: 80
  },
  overlay: {
    backgroundColor: BLACK_HALF_OPAQUE,
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  }
});

export default React.memo(Modal);
