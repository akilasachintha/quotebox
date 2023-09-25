import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import StackNavigator from "@navigation/StackNavigator";
import {StatusBar} from "expo-status-bar";
import {SafeAreaView} from "react-native-safe-area-context";

const navTheme = DefaultTheme;
navTheme.colors.background = '#fff';

export default function App() {
  return (
      <NavigationContainer theme={navTheme}>
          <SafeAreaView style={{flex: 1}}>
              <StatusBar style="dark"/>
              <StackNavigator/>
          </SafeAreaView>
      </NavigationContainer>
  );
}
