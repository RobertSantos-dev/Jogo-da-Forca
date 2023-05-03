import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { mobile } from '../../services/words.json';

type wordType = {
  name: string,
  desc: string,
}

export default function Game() {
  const [word, setWord] = useState<wordType>({ name: "", desc: "" });

  useEffect(() => {
    const index = Math.floor(Math.random() * mobile.length);
    setWord(mobile[index]);
  }, [])

  return (
    <View>
      <Text>{ word.name }</Text>
      <Text>{ word.desc }</Text>
    </View>
  );
}