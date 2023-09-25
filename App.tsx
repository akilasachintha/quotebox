import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import StackNavigator from "@navigation/StackNavigator";
import * as SplashScreen from 'expo-splash-screen';
import {useCallback, useEffect, useState} from "react";
import {SafeAreaView, StatusBar} from "react-native";

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
      <SafeAreaView onLayout={onLayoutRootView} style={{flex: 1}}>
          <StatusBar
              animated={true}
              backgroundColor="#fff"
              barStyle="dark-content"
          />
          <NavigationContainer theme={navTheme}>
              <StackNavigator/>
          </NavigationContainer>
      </SafeAreaView>
  );
}
