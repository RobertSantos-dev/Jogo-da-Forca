import { View } from 'react-native';
import styles from './styles';

export default function Puppet({ result }) {
  return (
    <View style={ styles.container }>
      <View style={ styles.view }></View>
      <View style={ styles.view2 }></View>
      <View style={ styles.view3 }></View>
      <View style={ styles.view }></View>
      <View style={ result >= 1 ? styles.view5 : styles.view }></View>
      <View style={ styles.view }></View>
      <View style={ result >= 2 ? styles.view7 : styles.view }></View>
      <View style={ result >= 3 ? styles.view8 : styles.view }></View>
      <View style={ styles.view }></View>
      <View style={ result >= 4 ? styles.view10 : styles.view }></View>
      <View style={ styles.view }></View>
      <View style={ result >= 5 ? styles.view12 : styles.view }></View>
    </View>
  );
}