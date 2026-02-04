import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import AppNavigation from './navigation/AppNavigation.jsx';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AppNavigation />
    </NavigationContainer>
  );
}
