import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Image, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync().catch((e) => console.error(e));

export default function MySplashScreen() {
    const [appIsReady, setAppIsReady] = useState(false);
    const fadeAnimation = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            Animated.timing(fadeAnimation, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }).start(async () => {
                await SplashScreen.hideAsync();
                // @ts-ignore
                navigation.replace('HomeTab');
            });
        }
    }, [appIsReady]);

    useEffect(() => {
        setAppIsReady(true);
    }, []);

    if (!appIsReady) {
        return null;
    }

    return (
        <Animated.View style={{opacity: fadeAnimation}} onLayout={onLayoutRootView}>
            <Image source={require('@assets/splash-with-background.png')}
                   style={{width: '100%', height: '100%', resizeMode: "cover"}}/>
        </Animated.View>
    );
}
