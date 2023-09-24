import {NavigationContainer} from "@react-navigation/native";
import StackNavigatorHome from "@navigation/StackNavigatorHome";
import {StatusBar} from "expo-status-bar";

export default function App() {
  return (
      <NavigationContainer>
              <StatusBar style="dark"/>
              <StackNavigatorHome/>
      </NavigationContainer>
  );
}
