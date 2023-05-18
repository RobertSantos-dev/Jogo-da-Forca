import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    borderRightWidth: 2,
    borderColor: '#ff79c6',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 30,
    width: '65%',
  },
  view: {
    height: 90,
    width: 90,
  },
  view2: {
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#ff79c6',
    height: 90,
    transform: [{ translateX: 45 }],
    width: 90,
  },
  view3: {
    borderTopWidth: 2,
    borderColor: '#ff79c6',
    height: 90,
    width: 90,
  },
  view5: {
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#f8f8f2',
    height: 90,
    width: 90,
  },
  view7: {
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderColor: '#f8f8f2',
    height: 90,
    transform: [{ translateX: 45 }],
    width: 90,
  },

  view8: {
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderColor: '#f8f8f2',
    height: 90,
    transform: [{ translateX: 45 }],
    width: 90,
  },
  view10: {
    borderBottomWidth: 3,
    borderColor: '#f8f8f2',
    height: 90,
    transform: [
      { rotate: '-45deg' },
      { translateX: 52 },
      { translateY: -13 },
    ],
    width: 90,
  },
  view12: {
    borderLeftWidth: 3,
    borderColor: '#f8f8f2',
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
