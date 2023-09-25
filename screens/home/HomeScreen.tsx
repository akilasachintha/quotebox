import {Animated, Easing, ScrollView, StatusBar} from "react-native";
import GeneratedCaptionsField from "@components/generatedCaptionsField/GeneratedCaptionsField";
import SubSectionsTitleText from "@components/subSectionsTitleText/SubSectionsTitleText";
import QuoteForTheDayField from "@components/quoteForTheDayField/QuoteForTheDayField";
import TrendingPostsCardsList from "@components/trendingPostsCardsList/TrendingPostsCardsList";
import CategoryItemsCardsList from "@components/categoryItemsCardsList/CategoryItemsCardsList";
import TabBarHeight from "@components/tabBar/TabBarHeight";
import {useCallback, useEffect, useRef, useState} from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync().catch((e) => console.error(e));

export default function HomeScreen() {
    const [appIsReady, setAppIsReady] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0.5)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
            easing: Easing.bezier(0.17, 0.67, 0.83, 0.67),
        }).start();
    };

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
            fadeIn();
        }
    }, [appIsReady]);

    useEffect(() => {
        async function prepare() {
            try {
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }

        prepare().catch((e) => console.error(e));
    }, []);

    if (!appIsReady) {
        return null;
    }

    return (
        <Animated.View style={{opacity: fadeAnim}} onLayout={onLayoutRootView}>
            <StatusBar
                backgroundColor="#fff"
                barStyle="dark-content"
                showHideTransition="fade"
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <GeneratedCaptionsField/>
                <SubSectionsTitleText title="Quote of the day"/>
                <QuoteForTheDayField/>
                <SubSectionsTitleText title="Trending posts"/>
                <TrendingPostsCardsList/>
                <SubSectionsTitleText title="Top Categories"/>
                <CategoryItemsCardsList/>
                <TabBarHeight/>
            </ScrollView>
        </Animated.View>
    );
}




