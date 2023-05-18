import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 30,
  },
  containerList: {
    flexDirection: 'row',
    gap: 2,
    justifyContent: 'center',
  },
  containerLetter: {
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#f8f8f2',
    height: 28,
    justifyContent: 'center',
    width: 28,
  },
  habilited: {
    color: '#f8f8f2',
    display: 'flex',
    fontWeight: '600',
    fontSize: 17,
  },
  desabilited: {
    display: 'none',
  }
});

export default styles;
