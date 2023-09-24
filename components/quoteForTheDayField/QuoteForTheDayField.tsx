import {paths} from "@helpers/assetsPaths";
import {ImageBackground, StyleSheet, Text, View} from "react-native";

export default function QuoteForTheDayField() {
    return (
        <ImageBackground source={paths["image-day"]} style={styles.imageForTheDayContainer}
                         imageStyle={styles.imageForTheDayImage}>
            <View style={styles.imageForTheDayImageOverlay}>
                <Text style={styles.imageForTheDayQuoteText}>
                    “This is the quote of the day”
                </Text>
                <Text style={styles.imageForTheDayAuthorText}>
                    - Mandela - 2021
                </Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imageForTheDayContainer: {
        width: "100%",
        height: 100,
    },
    imageForTheDayImage: {
        borderRadius: 10,
    },
    imageForTheDayImageOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    imageForTheDayQuoteText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    imageForTheDayAuthorText: {
        color: "#fff",
        fontSize: 14,
        marginTop: "2%",
    }
});