import { View } from 'react-native';
import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';

import Puppet from '../../components/Puppet';
import Letters from '../../components/Letters';
import { drawnWord } from './functions';
import * as words from '../../services/words.json';

type Params = { subject: string };

export default function Game() {
  const { subject } = useRoute().params as Params;
  const [word, setWord] = useState({ name: [''], desc: '' });
  const [letters, setLetters] = useState([false])

  useEffect(() => {
    if (subject == 'frontEnd') {
      drawnWord({ subject: words.frontEnd, setWord, setLetters });
    }
    if (subject == 'backEnd') {
      drawnWord({ subject: words.backEnd, setWord, setLetters });
    }
    if (subject == 'mobile') {
      drawnWord({ subject: words.mobile, setWord, setLetters });
    }
    if (subject == 'linguagens') {
      drawnWord({ subject: words.linguagens, setWord, setLetters });
    }
  }, []);

  return (
    <View>
      <Puppet />
      <Letters
        name={ word.name }
        letters={ letters }
      />
    </View>
  );
}