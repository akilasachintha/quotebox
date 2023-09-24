import {ImageBackground, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View} from "react-native";

interface TrendingPostItemProps {
    quoteText: string,
    authorText: string,
    source: ImageSourcePropType,
}

export default function TrendingPostCardItem({quoteText, authorText, source}: TrendingPostItemProps) {
    return (
        <TouchableOpacity style={styles.trendingPostItemTouchableContainer}>
            <ImageBackground source={source} style={styles.trendingPostItemContainer}
                             imageStyle={styles.trendingPostItemImage}>
                <View style={styles.trendingPostItemImageOverlay}>
                    <Text style={styles.trendingPostItemImageQuoteText}>{quoteText}</Text>
                    <Text style={styles.trendingPostItemImageAuthorText}>{authorText}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    trendingPostItemTouchableContainer: {
        marginRight: 10,
    },
    trendingPostItemContainer: {
        width: 160,
        height: 100,
    },
    trendingPostItemImage: {
        borderRadius: 10,
    },
    trendingPostItemImageOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: "6%",
    },
    trendingPostItemImageQuoteText: {
        textAlign: "center",
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
    trendingPostItemImageAuthorText: {
        color: "#fff",
        fontSize: 12,
        marginTop: "2%",
    }
});