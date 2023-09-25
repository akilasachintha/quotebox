import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TabNavigator from "@navigation/TabNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
    HomeTab: undefined,
    CaptionsList: undefined,
}

export default function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Group>
                <Stack.Screen name="HomeTab" component={TabNavigator}/>
            </Stack.Group>
        </Stack.Navigator>
    );
}