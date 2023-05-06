import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import SubjectList from '../../components/SubjectList';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>FORCA</Text>
      <Text style={ styles.message }>
        Para iniciarmos o jogo é preciso que você selecione um assunto
      </Text>
      <View style={ styles.buttonRoutes }>
        <SubjectList
          navigation={ navigation }
          subject="linguagens"
          text="Linguagens"
        />
        <SubjectList
          navigation={ navigation }
          subject="frontEnd"
          text="Front-End"
        />
        <SubjectList
          navigation={ navigation }
          subject="mobile"
          text="Mobile"
        />
        <SubjectList
          navigation={ navigation }
          subject="backEnd"
          text="Back-End"
        />
      </View>
    </View>
  );
}
