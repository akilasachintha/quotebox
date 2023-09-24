import {NavigationContainer} from "@react-navigation/native";
import StackNavigatorHome from "@navigation/StackNavigatorHome";
import {StatusBar} from "expo-status-bar";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function App() {
  return (
      <SafeAreaProvider>
          <NavigationContainer>
              <StatusBar style="dark"/>
              <StackNavigatorHome/>
          </NavigationContainer>
      </SafeAreaProvider>
  );
}
