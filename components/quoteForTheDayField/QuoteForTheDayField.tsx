import {paths} from "@helpers/assetsPaths";
import {ImageBackground, StyleSheet, Text, View} from "react-native";
import theme from "../../theme";

export default function QuoteForTheDayField() {
    return (
        <View style={styles.quoteForTheDayContainer}>
            <ImageBackground source={paths["image-day"]} style={styles.quoteOfTheDayViewContainer}
                             imageStyle={styles.quoteForTheDayImage}>
                <View style={styles.quoteOfTheDayImageOverlay}>
                    <Text style={styles.quoteOfTheDayQuoteText}>
                        “This is the quote of the day”
                    </Text>
                    <Text style={styles.quoteOfTheDayAuthorText}>
                        - Mandela - 2021
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    quoteForTheDayContainer: {
        marginHorizontal: theme.screenHorizontalMargin,
    },
    quoteOfTheDayViewContainer: {
        width: "100%",
        height: 100,
    },
    quoteForTheDayImage: {
        borderRadius: 10,
    },
    quoteOfTheDayImageOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    quoteOfTheDayQuoteText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    quoteOfTheDayAuthorText: {
        color: "#fff",
        fontSize: 14,
        marginTop: "2%",
    }
});