import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TabNavigator from "@navigation/TabNavigator";

const Stack = createNativeStackNavigator();
export default function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Group screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="HomeTab" component={TabNavigator}/>
            </Stack.Group>
        </Stack.Navigator>
    )
}