import { StatusBar } from 'expo-status-bar';

import AppNavigator from './navigation/AppNavigator.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './contexts/auth/AuthProvider.jsx';
import { PlaceProvider } from './contexts/places/PlaceProvider.jsx';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AuthProvider>
        <PlaceProvider>
          <AppNavigator />
        </PlaceProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
