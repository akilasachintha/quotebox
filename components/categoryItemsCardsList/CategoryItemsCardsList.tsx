import React from 'react';
import {ScrollView} from 'react-native';
import {paths} from '@helpers/assetsPaths';
import CategoryItemCard from "@components/categoryItemCard/CategoryitemCard";

interface CategoryItemsListItemType {
    id: number,
    imageSource: any,
    categoryText: string,
}

const categoryItemsList: CategoryItemsListItemType[] = [
    {
        id: 1,
        imageSource: paths['category-romantic'],
        categoryText: 'Motivational Quotes 1',
    },
    {
        id: 2,
        imageSource: paths['category-romantic'],
        categoryText: 'Motivational Quotes 2',
    },
    {
        id: 3,
        imageSource: paths['category-romantic'],
        categoryText: 'Motivational Quotes 3',
    },
];

export default function CategoryItemsCardsList() {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {categoryItemsList && categoryItemsList.length > 0 && categoryItemsList.map((item: CategoryItemsListItemType) => (
                <CategoryItemCard
                    key={item.id}
                    imageSource={item.imageSource}
                    categoryText={item.categoryText}
                />
            ))}
        </ScrollView>
    );
}
