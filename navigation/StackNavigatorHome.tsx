import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "@screens/HomeScreen";

const Stack = createNativeStackNavigator();
export default function StackNavigatorHome() {

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