import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import type { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';
import SubjectList from '../../components/SubjectList';
import * as words from '../../services/words.json';

export type ScreenNavigation = StackNavigationProp<{
  Home: undefined,
  Game: undefined
}>;

export default function Home() {
  const navigation = useNavigation<ScreenNavigation>();

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>FORCA</Text>
      <Text style={ styles.message }>
        Para iniciarmos o jogo é preciso que você selecione um assunto
      </Text>
      <View style={ styles.buttonRoutes }>
        <SubjectList
          navigation={ navigation }
          list={ words.linguagens }
          text="Linguagens"
        />
        <SubjectList
          navigation={ navigation }
          list={ words.frontEnd }
          text="Front-End"
        />
        <SubjectList
          navigation={ navigation }
          list={ words.mobile }
          text="Mobile"
        />
        <SubjectList
          navigation={ navigation }
          list={ words.backEnd }
          text="Back-End"
        />
      </View>
    </View>
  );
}
