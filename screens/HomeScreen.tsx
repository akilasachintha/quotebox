import {ScrollView} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import GeneratedCaptionsField from "@components/generatedCaptionsField/GeneratedCaptionsField";
import SubSectionsTitleText from "@components/subSectionsTitleText/SubSectionsTitleText";
import QuoteForTheDayField from "@components/quoteForTheDayField/QuoteForTheDayField";
import TrendingPostsCardsList from "@components/trendingPostsCardsList/TrendingPostsCardsList";
import CategoryItemsCardsList from "@components/categoryItemsCardsList/CategoryItemsCardsList";

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <GeneratedCaptionsField/>
                <SubSectionsTitleText title="Quote of the day"/>
                <QuoteForTheDayField/>
                <SubSectionsTitleText title="Trending posts"/>
                <TrendingPostsCardsList/>
                <SubSectionsTitleText title="Top Categories"/>
                <CategoryItemsCardsList/>
            </ScrollView>
        </SafeAreaView>
    );
}


