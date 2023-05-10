import { View, FlatList, Text } from 'react-native';
// import { useEffect, useState } from 'react';
import styles from './style';

type Props = { name: string[], letters: boolean[] }

export default function Letters({ name, letters }: Props) {
  return (
    <View style={ styles.container }>
      <FlatList
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