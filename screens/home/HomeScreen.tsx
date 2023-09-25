import {Animated, Easing, ScrollView, StatusBar} from "react-native";
import GeneratedCaptionsField from "@components/generatedCaptionsField/GeneratedCaptionsField";
import SubSectionsTitleText from "@components/subSectionsTitleText/SubSectionsTitleText";
import QuoteForTheDayField from "@components/quoteForTheDayField/QuoteForTheDayField";
import TrendingPostsCardsList from "@components/trendingPostsCardsList/TrendingPostsCardsList";
import CategoryItemsCardsList from "@components/categoryItemsCardsList/CategoryItemsCardsList";
import TabBarHeight from "@components/tabBar/TabBarHeight";
import {useRef} from "react";

export default function HomeScreen() {
    const fadeAnim = useRef(new Animated.Value(0.5)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
            easing: Easing.bezier(0.17, 0.67, 0.83, 0.67),
        }).start();
    };

    return (
        <Animated.View style={{opacity: fadeAnim}} onLayout={fadeIn}>
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




