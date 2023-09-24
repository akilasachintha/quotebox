import React from 'react';
import {FlatList, ImageSourcePropType, StyleSheet} from 'react-native';
import TrendingPostCardItem from "@components/trendingPostCardItem/TrendingPostCardItem";
import {paths} from "@helpers/assetsPaths";
import theme from "../../theme";

interface TrendingPostListItemType {
    id: string,
    source: ImageSourcePropType,
    quoteText: string,
    authorText: string
}

const trendingPostsList: TrendingPostListItemType[] = [
    {
        id: "1",
        source: paths["trending-post-1"],
        quoteText: "“This is the first quote”",
        authorText: "Mandela",
    },
    {
        id: "2",
        source: paths["image-day"],
        quoteText: "“This is the second quote”",
        authorText: "Einstein",
    },
    {
        id: "3",
        source: paths["trending-post-1"],
        quoteText: "“This is the third quote”",
        authorText: "Shakespeare",
    },
];

export default function TrendingPostsCardsList() {
    return (
        <FlatList
            data={trendingPostsList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.trendingPostsCardsListContainer}
            keyExtractor={item => item.id}
            renderItem={
                ({item}) => (
                    <TrendingPostCardItem
                        source={item.source}
                        quoteText={item.quoteText}
                        authorText={item.authorText}
                    />
                )
            }>
        </FlatList>
    );
}

const styles = StyleSheet.create({
    trendingPostsCardsListContainer: {
        marginLeft: theme.screenHorizontalMargin,
    }
});
