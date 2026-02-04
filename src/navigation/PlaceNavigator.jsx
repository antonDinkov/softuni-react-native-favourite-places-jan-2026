import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/places/HomeScreen.jsx";
import { CreatePlaceScreen } from "../screens/places/CreatePlaceScreen.jsx";

export default function PlaceNavigator() {
    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator>
            {/* Define your screens here */}
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="CreatePlace" component={CreatePlaceScreen} />
        </Stack.Navigator>
    );
}
