import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Game from './src/screens/Game';

export type NavigationTypes = {
  Home: undefined,
  Game: undefined
}

export type Props = NativeStackScreenProps<NavigationTypes, 'Home', 'Game'>;

export default function App() {
  const { Navigator, Screen } = createStackNavigator<NavigationTypes>()

  return (
    <NavigationContainer>
      <StatusBar barStyle='light-content' backgroundColor='#282a36' />
      <Navigator initialRouteName='Home'>
        <Screen
          name='Home'
          component={ Home }
          options={{ headerShown: false }}
        />
        <Screen
          name='Game'
          component={ Game }
          options={{
            headerStyle: { backgroundColor: '#282a36' },
            headerTintColor: '#8be9fd',
            headerTitleAlign: 'center',
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
