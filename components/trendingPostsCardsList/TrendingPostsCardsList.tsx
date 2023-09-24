import React from 'react';
import {ImageSourcePropType, ScrollView, StyleSheet} from 'react-native';
import TrendingPostCardItem from "@components/trendingPostCardItem/TrendingPostCardItem";
import {paths} from "@helpers/assetsPaths";
import theme from "../../theme";

interface TrendingPostListItemType {
    id: number,
    source: ImageSourcePropType,
    quoteText: string,
    authorText: string
}

const trendingPostsList: TrendingPostListItemType[] = [
    {
        id: 1,
        source: paths["trending-post-1"],
        quoteText: "“This is the first quote”",
        authorText: "Mandela",
    },
    {
        id: 2,
        source: paths["image-day"],
        quoteText: "“This is the second quote”",
        authorText: "Einstein",
    },
    {
        id: 3,
        source: paths["trending-post-1"],
        quoteText: "“This is the third quote”",
        authorText: "Shakespeare",
    },
];

export default function TrendingPostsCardsList() {
    return (
        <ScrollView
            horizontal={true}
            alwaysBounceHorizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.trendingPostsCardsListContainer}
        >
            {trendingPostsList && trendingPostsList.length > 0 && trendingPostsList.map((item: TrendingPostListItemType) => (
                <TrendingPostCardItem
                    key={item.id}
                    source={item.source}
                    quoteText={item.quoteText}
                    authorText={item.authorText}
                />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    trendingPostsCardsListContainer: {
        marginLeft: theme.screenHorizontalMargin,
    }
});
