import {ScrollView, View} from "react-native";
import GeneratedCaptionsField from "@components/generatedCaptionsField/GeneratedCaptionsField";
import SubSectionsTitleText from "@components/subSectionsTitleText/SubSectionsTitleText";
import QuoteForTheDayField from "@components/quoteForTheDayField/QuoteForTheDayField";
import TrendingPostsCardsList from "@components/trendingPostsCardsList/TrendingPostsCardsList";
import CategoryItemsCardsList from "@components/categoryItemsCardsList/CategoryItemsCardsList";
import TabBarHeight from "@components/tabBar/TabBarHeight";
import {StatusBar} from "expo-status-bar";

export default function HomeScreen() {
    return (
        <View>
            <StatusBar style="dark"/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <GeneratedCaptionsField/>
                <SubSectionsTitleText title="Quote of the day"/>
                <QuoteForTheDayField/>
                <SubSectionsTitleText title="Trending posts"/>
                <TrendingPostsCardsList/>
                <SubSectionsTitleText title="Top Categories"/>
                <CategoryItemsCardsList/>
                <SubSectionsTitleText title="Top Categories"/>
                <CategoryItemsCardsList/>
                <TabBarHeight/>
            </ScrollView>
        </View>
    );
}




