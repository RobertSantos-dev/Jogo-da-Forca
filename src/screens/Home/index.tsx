import { View, Text } from 'react-native';
import styles from './styles';

import SubjectList from '../../components/SubjectList';

export default function Home({ navigation }) {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>FORCA</Text>
      <Text>Para iniciarmos o jogo é preciso que você selecione um assunto</Text>
      <SubjectList navigation={ navigation } text="Linguagens" />
      <SubjectList navigation={ navigation } text="Front-End" />
      <SubjectList navigation={ navigation } text="Mobile" />
      <SubjectList navigation={ navigation } text="Back-End" />
    </View>
  );
}
