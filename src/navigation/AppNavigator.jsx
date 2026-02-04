import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/auth/LoginScreen.jsx";

export default function AppNavigator() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Login">
            {/* Define your screens here */}
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    );
}
