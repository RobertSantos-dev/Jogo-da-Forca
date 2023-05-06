import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';

import { drawnWord } from './functions';
import * as words from '../../services/words.json';

type Params = { subject: string };

export default function Game() {
  const { subject } = useRoute().params as Params;
  const [word, setWord] = useState({ name: "", desc: "" });

  useEffect(() => {
    if (subject == 'frontEnd') {
      drawnWord({ subject: words.frontEnd, setWord })
    }
    if (subject == 'backEnd') {
      drawnWord({ subject: words.backEnd, setWord })
    }
    if (subject == 'mobile') {
      drawnWord({ subject: words.mobile, setWord })
    }
    if (subject == 'linguagens') {
      drawnWord({ subject: words.linguagens, setWord })
    }

  }, [])

  return (
    <View>
      <Text>{ word.name }</Text>
      <Text>{ word.desc }</Text>
    </View>
  );
}