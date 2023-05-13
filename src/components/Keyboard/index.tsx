import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { Dispatch, SetStateAction } from 'react';
import styles from './styles';
import { search } from './functions';

type Props = {
  interaction: string[],
  setInteraction: Dispatch<SetStateAction<string[]>>
  setLetters: Dispatch<SetStateAction<boolean[]>>,
  word: string[],
}

export default function Keyboard({ interaction, setLetters, word, setInteraction }: Props) {
  return (
    <View style={ styles.container }>
      <FlatList
        contentContainerStyle={ styles.containerList }
        numColumns={ 6 }
        data={ interaction }
        renderItem={ ({ item }) => (
          item != ' ' && (
            <TouchableOpacity
              onPress={ () => search(item, setLetters, word, setInteraction) }
              style={ styles.button }>
              <Text style={ styles.buttonText }>{ item }</Text>
            </TouchableOpacity>
          )
        ) }
      />
    </View>
  )
}