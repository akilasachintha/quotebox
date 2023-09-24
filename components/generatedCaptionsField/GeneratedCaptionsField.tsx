import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {paths} from "@helpers/assetsPaths";
import {FontAwesome} from "@expo/vector-icons";
import theme from "../../theme";

export default function GeneratedCaptionsField() {
    return (
        <View style={styles.generateCaptionContainer}>
            <Image source={paths["social-img"]}/>
            <View style={styles.generatedCaptionRightContainer}>
                <Text style={styles.generatedCaptionsRightTopText}>Generate captions for social media</Text>
                <TouchableOpacity style={styles.generateCaptionRightBottomButton}>
                    <View style={styles.generatedCaptionsRightBottomButtonTextAndIconContainer}>
                        <Text style={styles.generatedCaptionsRightBottomButtonText}>Continue</Text>
                        <FontAwesome name="angle-double-right" size={20} color="#F66A6A"/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    generateCaptionContainer: {
        backgroundColor: "#F66A6A",
        borderRadius: 14,
        flexDirection: "row",
        padding: "5%",
        marginTop: "5%",
        marginHorizontal: theme.screenHorizontalMargin
    },
    generatedCaptionRightContainer: {
        alignItems: "flex-end",
        justifyContent: "space-around",
        flex: 1,
    },
    generatedCaptionsRightTopText: {
        color: "#fff",
        fontSize: 18,
    },
    generateCaptionRightBottomButton: {
        backgroundColor: "#fff",
        borderRadius: 14,
    },
    generatedCaptionsRightBottomButtonTextAndIconContainer: {
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: "10%",
        paddingVertical: "5%",
    },
    generatedCaptionsRightBottomButtonText: {
        color: "#000",
        fontSize: 14,
        paddingRight: "6%",
    }
});