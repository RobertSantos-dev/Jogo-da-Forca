import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import { ScreenNavigation } from '../../screens/Home';

type Params = {
  navigation: ScreenNavigation,
  list: Array<{ name: string, desc: string }>
  text: string
}

export default function SubjectList({ navigation, list, text }: Params) {
  return (
    <TouchableOpacity
      style={ styles.button }
      onPress={ () => {
        navigation.navigate('Game', list)
      } }>
      <Text style={ styles.text }>{ text }</Text>
    </TouchableOpacity>
  );
}
