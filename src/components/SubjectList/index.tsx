import { View, Text, TouchableOpacity } from 'react-native';

export default function SubjectList({ navigation, text }) {
  return (
    <View>
      <TouchableOpacity onPress={ () => navigation.navigate('Game') }>
        <Text>{ text }</Text>
      </TouchableOpacity>
    </View>
  );
}
