import React from 'react';
import { View, TouchableOpacity, Animated, I18nManager } from 'react-native';
import sStyles from '../../styles';
import { BEIGE, GRAY } from '../../colors';

export default class Switch extends React.Component {
  offsetX = new Animated.Value(0);

  dimensions = {
    width: 50,
    padding: 14,
    circleWidth: 20,
    circleHeight: 20,
    translateX: 28
  };

  createToggleSwitchStyle = () => [
    {
      justifyContent: 'center',
      width: this.dimensions.width,
      borderRadius: 20,
      padding: this.dimensions.padding,
      backgroundColor: GRAY,
      paddingBottom: this.dimensions.padding
    }
  ];

  createInsideCircleStyle = () => [
    {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 4,
      left: 0,
      position: 'absolute',
      backgroundColor: BEIGE,
      transform: [{ translateX: this.offsetX }],
      width: this.dimensions.circleWidth,
      height: this.dimensions.circleHeight,
      borderRadius: this.dimensions.circleWidth / 2,
      elevation: 1
    }
  ];

  render() {
    const { isOn, onToggle, icon, hitSlop, skipAnimation } = this.props;

    let toValue;
    if (!I18nManager.isRTL && isOn) {
      toValue = this.dimensions.width - this.dimensions.translateX;
    } else if (I18nManager.isRTL && isOn) {
      toValue = -this.dimensions.width + this.dimensions.translateX;
    } else {
      toValue = 0;
    }

    Animated.timing(this.offsetX, {
      toValue,
      duration: skipAnimation ? 0 : 100,
      useNativeDriver: true
    }).start();

    return (
      <View style={[sStyles.flexRow, sStyles.alignItemsCenter]}>
        <TouchableOpacity
          activeOpacity={0.8}
          hitSlop={hitSlop}
          style={this.createToggleSwitchStyle()}
          onPress={() => onToggle(!isOn)}
        >
          <Animated.View style={this.createInsideCircleStyle()}>{icon}</Animated.View>
        </TouchableOpacity>
      </View>
    );
  }
}
