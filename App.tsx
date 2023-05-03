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
  const Stack = createStackNavigator<NavigationTypes>()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={ Home } />
        <Stack.Screen name='Game' component={ Game } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
