import _ from 'lodash';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import React, { useContext, useMemo } from 'react';
import {
  BEIGE,
  GRAY,
  GRAY_LIGHT,
  GREEN_HALF_OPAQUE,
  GREEN_LIGHT,
  PINK,
  WHITE_HALF_OPAQUE
} from '../../colors';
import sStyles from '../../styles';
import { AppContext } from '../../utils/context';

export default function TypeaheadDropdown({
  open,
  setOpen,
  value,
  options,
  setValue,
  onOpen,
  placeholder,
  onSelectItem = undefined,
  addCustomItem = false,
  direction = 'AUTO',
  multipleLines = false,
  max = 40,
  multiple = true,
  searchPlaceholder = 'Search'
}) {
  const { darkMode } = useContext(AppContext);

  const theme = useMemo(
    () =>
      darkMode
        ? {
            dropdown: styles.darkDropdown,
            dropdownContainer: styles.darkDropdownContainer,
            text: styles.darkText,
            itemSeparator: styles.darkItemSeparator,
            placeholder: styles.darkPlaceholderText
          }
        : {
            dropdown: styles.lightDropdown,
            dropdownContainer: styles.lightDropdownContainer,
            text: styles.lightText,
            itemSeparator: styles.lightItemSeparator,
            placeholder: styles.lightPlaceholderText
          },
    [darkMode]
  );

  return (
    <DropDownPicker
      itemSeparator
      searchable
      addCustomItem={addCustomItem}
      badgeColors={[PINK]}
      badgeSeparatorStyle={styles.badgeSeparator}
      badgeStyle={sStyles.tagNoMargin}
      badgeTextStyle={sStyles.bodyFont}
      containerStyle={styles.container}
      dropDownContainerStyle={theme.dropdownContainer}
      dropDownDirection={direction}
      extendableBadgeContainer={multipleLines}
      flatListProps={{ nestedScrollEnabled: true }}
      items={options}
      itemSeparatorStyle={theme.itemSeparator}
      listMode="SCROLLVIEW"
      max={max}
      mode="BADGE"
      multiple={multiple}
      open={open}
      placeholder={placeholder}
      placeholderStyle={[sStyles.bodyFont, theme.placeholder]}
      scrollViewProps={{ nestedScrollEnabled: true }}
      searchContainerStyle={styles.searchContainer}
      searchPlaceholder={searchPlaceholder}
      searchPlaceholderTextColor={theme.placeholder.color}
      searchTextInputStyle={[sStyles.bodyFont, theme.text]}
      selectedItemContainerStyle={styles.selectedItem}
      setOpen={setOpen}
      setValue={setValue}
      showArrowIcon={false}
      showBadgeDot={false}
      showTickIcon={false}
      style={theme.dropdown}
      textStyle={[sStyles.bodyFont, sStyles.capitalize, theme.text]}
      value={value}
      zIndex={1000}
      onOpen={onOpen}
      onSelectItem={(items) => {
        if (multiple && items.length >= max) {
          setOpen(false);
        }
        onSelectItem?.(items);
      }}
    />
  );
}

const styles = StyleSheet.create({
  badgeSeparator: {
    width: 4
  },
  container: {
    elevation: 10000,
    marginTop: 1,
    paddingTop: -202,
    zIndex: 10000
  },
  darkDropdown: {
    backgroundColor: BEIGE,
    borderRadius: 14,
    borderWidth: 0,
    paddingVertical: 4
  },
  darkDropdownContainer: {
    backgroundColor: BEIGE,
    borderWidth: 0,
    flex: 1
  },
  darkItemSeparator: { backgroundColor: WHITE_HALF_OPAQUE },
  darkPlaceholderText: { color: GRAY },
  lightDropdown: {
    backgroundColor: GRAY_LIGHT,
    borderRadius: 14,
    borderWidth: 0,
    paddingVertical: 4
  },
  lightDropdownContainer: {
    backgroundColor: GRAY_LIGHT,
    borderWidth: 0,
    flex: 1
  },
  lightItemSeparator: { backgroundColor: GREEN_HALF_OPAQUE },
  lightPlaceholderText: { color: GREEN_HALF_OPAQUE },
  searchContainer: {
    borderBottomWidth: 0
  },
  selectedItem: {
    backgroundColor: PINK
  }
});
