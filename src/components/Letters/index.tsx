import { View, FlatList, Text } from 'react-native';
import styles from './style';

type Props = { name: string[], desc: string, letters: boolean[] }

export default function Letters({ name, desc, letters }: Props) {
  return (
    <View style={ styles.container }>
      <Text style={ styles.textDesc }>
        Dica:
        {' '}
        <Text style={ styles.textDescStrong } testID="dicaId">
          { desc }
        </Text>
      </Text>
      <FlatList
        testID="listLetters"
        contentContainerStyle={ styles.containerList }
        data={ name }
        renderItem={ ({ item, index }) => {
          return (
            <View style={ styles.containerLetter }>
              <Text style={
                letters[index] ? styles.habilited : styles.desabilited
              }>
                { item === ' ' ? '-' : item }
              </Text>
            </View>
          )
         } }
      />
    </View>
  );
}