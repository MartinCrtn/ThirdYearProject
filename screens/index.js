import { Navigation } from 'react-native-navigation';

import homeScreen from './home';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('homeScreen', () => home);
  Navigation.registerComponent('Screen1', () => Screen1);
  Navigation.registerComponent('Screen2', () => Screen2);
}
