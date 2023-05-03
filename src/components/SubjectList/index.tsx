import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import { ScreenNavigation } from '../../screens/Home';

type Params = {
  navigation: ScreenNavigation,
  text: string
}

export default function SubjectList({ navigation, text }: Params) {
  return (
    <TouchableOpacity
      style={ styles.button }
      onPress={ () => navigation.navigate('Game') }>
      <Text style={ styles.text }>{ text }</Text>
    </TouchableOpacity>
  );
}
