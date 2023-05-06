import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    borderRightWidth: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '65%',
  },
  view: {
    height: 90,
    width: 90,
  },
  view2: {
    borderTopWidth: 2,
    borderLeftWidth: 2,
    height: 90,
    transform: [{ translateX: 45 }],
    width: 90,
  },
  view3: {
    borderTopWidth: 2,
    height: 90,
    width: 90,
  },
  view5: {
    borderRadius: 100,
    borderWidth: 2,
    height: 90,
    width: 90,
  },
  view7: {
    borderTopWidth: 2,
    borderRightWidth: 2,
    height: 90,
    transform: [{ translateX: 45 }],
    width: 90,
  },

  view8: {
    borderTopWidth: 2,
    borderLeftWidth: 2,
    height: 90,
    transform: [{ translateX: 45 }],
    width: 90,
  },
  view10: {
    borderBottomWidth: 2,
    height: 90,
    transform: [
      { rotate: '-45deg' },
      { translateX: 52 },
      { translateY: -13 },
    ],
    width: 90,
  },
  view12: {
    borderLeftWidth: 2,
    height: 90,
    transform: [
      { rotate: '-40deg' },
      { translateX: 5.5 },
      { translateY: -48 },
    ],
    width: 90,
  },
});

export default styles;
