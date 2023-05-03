import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import type { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';
import SubjectList from '../../components/SubjectList';

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
        <SubjectList navigation={ navigation } text="Linguagens" />
        <SubjectList navigation={ navigation } text="Front-End" />
        <SubjectList navigation={ navigation } text="Mobile" />
        <SubjectList navigation={ navigation } text="Back-End" />
      </View>
    </View>
  );
}
