import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 50,
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
  },

  textDesc: {
    color: '#f8f8f2',
    fontSize: 15,
    marginBottom: 30,
    textAlign: 'center',
  },
  textDescStrong: {
    color: '#50fa7b',
    fontSize: 16,
    fontWeight: '900',
  }
});

export default styles;
