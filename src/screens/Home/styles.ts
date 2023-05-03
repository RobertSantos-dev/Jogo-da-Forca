import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282a36',
    height: '100%',
  },
  title: {
    color: '#50fa7b',
    fontSize: 40,
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
  },
  message: {
    color: '#f8f8f2',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonRoutes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default styles;
