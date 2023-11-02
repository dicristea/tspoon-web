import { View } from 'react-native';
import React from 'react';
import sStyles from '../../styles';
import TagCloud from '../search/TagCloud';
import { typeaheadPrep } from '../../utils/utils';
import { CUISINE_TO_ID } from '../../consts';
import TypeaheadDropdown from './TypeaheadDropdown';
import Spacing from './Spacing';
import Text from './Text';

export default function TagInputs({
  titleStyle,
  titles,
  cuisines,
  setCuisines,
  methods,
  setMethods,
  flavors,
  setFlavors,
  diets,
  setDiets,
  setCategories,
  categories,
  cuisinesOpen,
  setCuisinesOpen,
  tagCloudProps
}) {
  return (
    <>
      <Spacing bottom={1}>
        <Text style={titleStyle}>{titles.cuisines}</Text>
      </Spacing>
      <View style={cuisinesOpen && sStyles.zIndex1}>
        <TypeaheadDropdown
          max={3}
          open={cuisinesOpen}
          options={typeaheadPrep(CUISINE_TO_ID)}
          placeholder="Choose cuisine..."
          setOpen={setCuisinesOpen}
          setValue={setCuisines}
          value={cuisines}
        />
      </View>
      <Spacing bottom={1} top={2}>
        <Text style={titleStyle}>{titles.categories}</Text>
      </Spacing>
      <TagCloud {...tagCloudProps} selectable setTags={setCategories} tags={categories} />
      <Spacing bottom={1} top={2}>
        <Text style={titleStyle}>{titles.diets}</Text>
      </Spacing>
      <TagCloud {...tagCloudProps} selectable setTags={setDiets} tags={diets} />
      <Spacing bottom={1} top={2}>
        <Text style={titleStyle}>{titles.flavors}</Text>
      </Spacing>
      <TagCloud {...tagCloudProps} selectable setTags={setFlavors} tags={flavors} />
      <Spacing bottom={1} top={2}>
        <Text style={titleStyle}>{titles.methods}</Text>
      </Spacing>
      <TagCloud {...tagCloudProps} selectable setTags={setMethods} tags={methods} />
    </>
  );
}
