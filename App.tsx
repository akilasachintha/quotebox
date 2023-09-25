import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import StackNavigator from "@navigation/StackNavigator";

const navTheme = DefaultTheme;
navTheme.colors.background = '#fff';

export default function App() {
    return (
        <NavigationContainer theme={navTheme}>
            <StackNavigator/>
          </NavigationContainer>
    );
}
