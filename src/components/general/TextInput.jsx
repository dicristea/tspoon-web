import React, { useContext, useEffect, useRef, useState } from 'react';
import { TextInput as ExtTextInput, Keyboard, StyleSheet } from 'react-native';
import { BEIGE, GRAY_LIGHT, GREEN_HALF_OPAQUE, GREEN_LIGHT, WHITE_HALF_OPAQUE } from '../../colors';
import { AppContext } from '../../utils/context';
import { darkFontColor, lightFontColor } from '../../styles';

export default function TextInput({
  placeholder,
  value,
  onChangeText,
  onEndEditing,
  style,
  forceLiveUpdate = false,
  multiline = true,
  enterKeyHint = 'next',
  showBackground = false,
  overrideDarkMode = false,
  ...props
}) {
  const [ph, setPh] = useState(placeholder);
  const [text, setText] = useState(value);
  const localInputRef = useRef();
  const { darkMode } = useContext(AppContext);

  const keyboardDidHideCallback = () => {
    localInputRef.current.blur?.();
  };

  useEffect(() => {
    const keyboardDidHideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHideCallback
    );

    return () => {
      keyboardDidHideSubscription?.remove();
    };
  }, []);

  return (
    <ExtTextInput
      multiline={multiline}
      placeholder={ph}
      placeholderTextColor={darkMode ? WHITE_HALF_OPAQUE : GREEN_HALF_OPAQUE}
      selectionColor={BEIGE}
      value={text}
      ref={(ref) => {
        localInputRef && (localInputRef.current = ref);
      }}
      style={[
        showBackground && styles.bg,
        !overrideDarkMode && (darkMode ? styles.darkBg : styles.lightBg),
        style
      ]}
      onChangeText={(newText) => {
        setText(newText.replace('\n', ''));
        if (forceLiveUpdate) {
          onChangeText?.(newText);
        }
      }}
      onEndEditing={() => {
        if (!forceLiveUpdate) {
          onChangeText?.(text);
        }
        onEndEditing?.(text);
      }}
      {...props}
      blurOnSubmit={(props?.numberOfLines || 0) < 3}
      enterKeyHint={enterKeyHint}
      onBlur={() => {
        if (!text) {
          setPh(placeholder);
        }
        props.onBlur?.();
      }}
      onFocus={() => {
        setPh('');
        props.onFocus?.();
      }}
    />
  );
}

const styles = StyleSheet.create({
  bg: {
    borderRadius: 12,
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 4
  },
  darkBg: {
    backgroundColor: GREEN_LIGHT,
    color: darkFontColor
  },
  lightBg: {
    backgroundColor: GRAY_LIGHT,
    color: lightFontColor
  }
});
