import { View } from 'react-native';
import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';

import Puppet from '../../components/Puppet';
import Letters from '../../components/Letters';
import Keyboard from '../../components/Keyboard';

import styles from './styles';
import { drawnWord, randomLetters } from './functions';
import * as words from '../../services/words.json';

type Params = { subject: string };

export default function Game() {
  const { subject } = useRoute().params as Params;
  const [letters, setLetters] = useState([false]);
  const [word, setWord] = useState({ name: [''], desc: '' });
  const [interaction, setInteraction] = useState([''])
  const [result, setResult] = useState(0)

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

  useEffect(() => {
    randomLetters({ arr: word.name, setInteraction });
  }, [word])

  useEffect(() => {
    setLetters((prevState) => prevState);
  }, [interaction]);

  return (
    <View style={ styles.container }>
      <Puppet result={ result } />
      <Letters
        name={ word.name }
        letters={ letters }
      />
      <Keyboard
        interaction={ interaction }
        setLetters={ setLetters }
        word={ word.name }
        setInteraction={ setInteraction }
        setResult={ setResult }
      />
    </View>
  );
}