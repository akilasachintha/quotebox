import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TabNavigator from "@navigation/TabNavigator";
import CaptionsListScreen from "@screens/home/CaptionsListScreen";

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
                <Stack.Screen name="CaptionsList" component={CaptionsListScreen}/>
            </Stack.Group>
        </Stack.Navigator>
    );
}