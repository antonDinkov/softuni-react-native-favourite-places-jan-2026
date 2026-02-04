import { StatusBar } from 'expo-status-bar';

import AppNavigator from './navigation/AppNavigator.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './contexts/auth/AuthProvider.jsx';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
