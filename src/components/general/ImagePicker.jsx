import React, { useContext, useState } from 'react';
import { ImageBackground, Pressable, StyleSheet, View } from 'react-native';
import * as ExImagePicker from 'expo-image-picker';
import FastImage from 'react-native-fast-image';
import { PressableText } from '../Pressables';
import { PINK, WHITE } from '../../colors';
import sStyles, { bodyFontSize } from '../../styles';
import UploadImageIcon from '../../../assets/icons/UploadImage';
import { AppContext } from '../../utils/context';

// TODO: switch to react-native-image-picker when its fixed
export default function ImagePicker({ setImage, style = [], imageStyle, emptyImageStyle, size }) {
  const [image, setImageInt] = useState(null);
  const { darkMode } = useContext(AppContext);

  const saveImage = (chosenImage) => {
    setImageInt(chosenImage);
    setImage?.(chosenImage);
  };

  const pickImage = async () => {
    const result = await ExImagePicker.launchImageLibraryAsync({
      mediaTypes: ExImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    });

    if (!result.canceled) {
      saveImage(result.assets[0].uri);
    }
  };

  return (
    <View style={style}>
      {image ? (
        <FastImage
          source={{ uri: image }}
          style={[
            sStyles.imageStyle,
            imageStyle,
            size === 'normal' ? sStyles.normalImageSize : sStyles.smallImageSize
          ]}
        >
          <PressableText text="X" textStyle={styles.textStyle} onPress={pickImage} />
        </FastImage>
      ) : (
        <Pressable
          hitSlop={20}
          style={[
            sStyles.imageStyle,
            imageStyle,
            emptyImageStyle,
            size === 'normal' ? sStyles.normalImageSize : sStyles.smallImageSize
          ]}
          onPress={pickImage}
        >
          <UploadImageIcon props={darkMode ? styles.darkIcon : styles.lightIcon} />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  darkIcon: {
    fill: WHITE
  },
  lightIcon: {
    fill: PINK
  },
  textStyle: {
    alignSelf: 'flex-end',
    color: WHITE,
    display: 'flex',
    fontFamily: 'SourceSans3_700Bold',
    fontSize: bodyFontSize,
    marginRight: 3,
    marginTop: -1
  }
});
