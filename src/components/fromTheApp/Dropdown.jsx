import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import React, { useContext, useMemo } from 'react';
import {
  BEIGE,
  GRAY_LIGHT,
  GREEN_HALF_OPAQUE,
  PINK,
  WHITE,
  WHITE_HALF_OPAQUE,
  GREEN
} from '../../colors';
import sStyles from '../../styles';
import { AppContext } from '../../utils/context';

export default function Dropdown({
  open,
  setOpen,
  value,
  options,
  setValue,
  dropdownWidth,
  onOpen,
  direction
}) {
  const { darkMode } = useContext(AppContext);

  const theme = useMemo(
    () =>
      darkMode
        ? {
            dropdown: styles.darkDropdown,
            dropdownContainer: styles.darkDropdownContainer,
            text: styles.darkText,
            itemSeparator: styles.darkItemSeparator
          }
        : {
            dropdown: styles.lightDropdown,
            dropdownContainer: styles.lightDropdownContainer,
            text: styles.lightText,
            itemSeparator: styles.lightItemSeparator
          },
    [darkMode]
  );

  return (
    <DropDownPicker
      itemSeparator
      containerStyle={styles.container}
      dropDownDirection={direction}
      items={options}
      itemSeparatorStyle={theme.itemSeparator}
      open={open}
      setOpen={setOpen}
      setValue={setValue}
      showArrowIcon={false}
      showTickIcon={false}
      style={[theme.dropdown, dropdownWidth]}
      textStyle={[sStyles.bodyFont, styles.text]}
      value={value}
      zIndex={1}
      dropDownContainerStyle={
        direction === 'TOP'
          ? [theme.dropdownContainer, dropdownWidth, { borderBottomWidth: 1 }]
          : [theme.dropdownContainer, dropdownWidth, { borderTopWidth: 1 }]
      }
      selectedItemContainerStyle={{
        backgroundColor: PINK
      }}
      onOpen={onOpen}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: 'auto'
  },
  darkDropdown: {
    backgroundColor: BEIGE,
    borderRadius: 12,
    borderWidth: 0,
    width: 152
  },
  darkDropdownContainer: {
    backgroundColor: BEIGE,
    borderWidth: 0,
    width: 152
  },
  darkItemSeparator: {
    backgroundColor: WHITE_HALF_OPAQUE
  },
  darkText: {
    color: WHITE
  },
  lightDropdown: {
    backgroundColor: GRAY_LIGHT,
    borderRadius: 12,
    borderWidth: 0,
    width: 152
  },
  lightDropdownContainer: {
    backgroundColor: GRAY_LIGHT,
    borderWidth: 0,
    width: 152
  },
  lightItemSeparator: {
    backgroundColor: GREEN_HALF_OPAQUE
  },
  lightText: {
    color: GREEN
  }
});
