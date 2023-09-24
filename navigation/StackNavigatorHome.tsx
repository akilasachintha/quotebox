import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "@screens/HomeScreen";
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
export default function StackNavigatorHome() {
    const insets = useSafeAreaInsets();

    return (
        <Stack.Navigator>
            <Stack.Group screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: "#fff",
                }
            }}>
                <Stack.Screen name="Home" component={HomeScreen}/>
            </Stack.Group>
        </Stack.Navigator>
    )
}