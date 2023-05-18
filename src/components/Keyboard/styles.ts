import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  containerList: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#44475a',
    borderRadius: 5,
    elevation: 30,
    height: 50,
    justifyContent: 'center',
    marginHorizontal: 2,
    shadowColor: 'black',
    width: 50,
  },
  buttonText: {
    color: '#ff79c6',
    fontSize: 16,
    fontWeight: '600',
  }
});

export default styles;
