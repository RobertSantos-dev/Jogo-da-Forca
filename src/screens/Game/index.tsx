import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native'

import type { RouteProp, ParamListBase } from '@react-navigation/native';



export default function Game() {
  const { params }: Readonly<object | ParamListBase> = useRoute();
  const [word, setWord] = useState({ name: "", desc: "" });

  useEffect(() => {
    const index = Math.floor(Math.random() * params.length);
    setWord(params[index])
    console.log(params)
  }, [])

  return (
    <View>
      <Text>{ word.name }</Text>
      <Text>{ word.desc }</Text>
    </View>
  );
}