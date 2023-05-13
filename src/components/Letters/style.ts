import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  containerList: {
    flexDirection: 'row',
    gap: 2,
    justifyContent: 'center',
  },
  containerLetter: {
    alignItems: 'center',
    borderBottomWidth: 2,
    height: 28,
    justifyContent: 'center',
    width: 28,
  },
  habilited: {
    display: 'flex',
    fontWeight: '600',
  },
  desabilited: {
    display: 'none',
  }
});

export default styles;
