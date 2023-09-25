import {StyleSheet, View} from "react-native";
import CaptionsListField from "@components/captionsListField/CaptionsListField";


export default function CaptionsListScreen() {
    return (
        <View style={styles.container}>
            <CaptionsListField/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop: "5%",
    },
});
