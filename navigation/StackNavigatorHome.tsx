import CaptionsListScreen from "@screens/home/CaptionsListScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "@screens/home/HomeScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
    HomeScreen: undefined,
    CaptionsListScreen: undefined,
}
export default function StackNavigatorHome() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
        }}>
            <Stack.Group>
                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                <Stack.Screen name="CaptionsListScreen" component={CaptionsListScreen}/>
            </Stack.Group>
        </Stack.Navigator>
    );
}