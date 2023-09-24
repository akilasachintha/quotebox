import {StyleSheet, Text, View} from "react-native";

interface SubSectionsTitleTextProps {
    title: string,
}

export default function SubSectionsTitleText({title}: SubSectionsTitleTextProps) {
    return (
        <View style={styles.subSectionsTitleContainer}>
            <Text style={styles.subSectionsTitleText}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    subSectionsTitleContainer: {
        paddingVertical: "5%",
    },
    subSectionsTitleText: {
        fontSize: 18,
        fontWeight: "bold",
    }
});