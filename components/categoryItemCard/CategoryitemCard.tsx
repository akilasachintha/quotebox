import {ImageBackground, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View} from "react-native";

interface CategoryItemCardProps {
    categoryText: string,
    imageSource: ImageSourcePropType,
}

export default function CategoryItemCard({categoryText, imageSource}: CategoryItemCardProps) {
    return (
        <TouchableOpacity style={styles.categoryItemCardContainer}>
            <ImageBackground source={imageSource} style={styles.categoryItemCardImageView}
                             imageStyle={styles.categoryItemCardImage}/>
            <View style={styles.categoryItemCardTextContainer}>
                <Text style={styles.categoryItemCardText}>{categoryText}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    categoryItemCardContainer: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        marginBottom: 10,
        marginRight: 10,
        borderRadius: 10,
    },
    categoryItemCardImageView: {
        width: 160,
        height: 100,
    },
    categoryItemCardImage: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        objectFit: "cover",
    },
    categoryItemCardTextContainer: {
        backgroundColor: "#fff",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: "8%",
    },
    categoryItemCardText: {
        fontSize: 12,
    }
});
