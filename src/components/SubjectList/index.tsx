import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

type Params = {
  navigation: any,
  subject: string,
  text: string
}

export default function SubjectList({ navigation, subject, text }: Params) {
  return (
    <TouchableOpacity
      accessibilityRole='button'
      style={[styles.button, styles.buttonShadow]}
      onPress={ () => {
        navigation.navigate('Game', { subject })
      } }>
      <Text style={ styles.text }>{ text }</Text>
    </TouchableOpacity>
  );
}
