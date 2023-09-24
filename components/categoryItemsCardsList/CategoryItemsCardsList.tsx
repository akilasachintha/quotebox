import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {paths} from '@helpers/assetsPaths';
import CategoryItemCard from "@components/categoryItemCard/CategoryitemCard";
import theme from "../../theme";

interface CategoryItemsListItemType {
    id: string,
    imageSource: any,
    categoryText: string,
}

const categoryItemsList: CategoryItemsListItemType[] = [
    {
        id: "1",
        imageSource: paths['category-romantic'],
        categoryText: 'Motivational Quotes 1',
    },
    {
        id: "2",
        imageSource: paths['category-romantic'],
        categoryText: 'Motivational Quotes 2',
    },
    {
        id: "3",
        imageSource: paths['category-romantic'],
        categoryText: 'Motivational Quotes 3',
    },
];

export default function CategoryItemsCardsList() {
    return (
        <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
                  style={styles.categoryItemsCardsListContainer}
                  data={categoryItemsList}
                  keyExtractor={item => item.id}
                  renderItem={
                      ({item}) => (
                          <CategoryItemCard
                              imageSource={item.imageSource}
                              categoryText={item.categoryText}
                          />
                      )
                  }>
        </FlatList>
    );
}

const styles = StyleSheet.create({
    categoryItemsCardsListContainer: {
        marginLeft: theme.screenHorizontalMargin,
    }
});
