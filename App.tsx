import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import StackNavigator from "@navigation/StackNavigator";
import * as SplashScreen from 'expo-splash-screen';
import {StatusBar} from "expo-status-bar";
import {SafeAreaView} from "react-native-safe-area-context";
import {useCallback, useEffect, useState} from "react";

const navTheme = DefaultTheme;
navTheme.colors.background = '#fff';

SplashScreen.preventAutoHideAsync().catch(e => console.log(e));

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    useEffect(() => {
        setTimeout(() => {
            setAppIsReady(true);
        }, 2000);

    }, []);

    if (!appIsReady) {
        return null;
    }

  return (
      <NavigationContainer theme={navTheme}>
          <SafeAreaView style={{flex: 1}} onLayout={onLayoutRootView}>
              <StatusBar style="dark"/>
              <StackNavigator/>
          </SafeAreaView>
      </NavigationContainer>
  );
}
