import { Navigation } from 'react-native-navigation';
import * as top from './top';
import * as home from './home';

export function registerScreens() {
  // top
  Navigation.registerComponent('HomeScreen', () => top.HomeScreen);

  // home
  Navigation.registerComponent('LoginScreen', () => home.LoginScreen);
}
