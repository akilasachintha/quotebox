import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import {Feather} from "@expo/vector-icons";
import {ITab} from "@navigation/TabNavigator";

const {width} = Dimensions.get('window');

interface ITabBarProps {
    state: any,
    navigation: any,
    tabs: ITab[]
}

export default function TabBar({state, navigation, tabs}: ITabBarProps) {
    return (
        <View style={styles.mainContainer}>
            {tabs.map((tab) => {
                const isFocused = state.index === tab.id;

                const onPress = () => {
                    if (!isFocused) {
                        navigation.navigate(tab.name);
                    }
                };

                return (
                    <View key={tab.id} style={styles.mainItemContainer}>
                        <Pressable
                            onPress={onPress}
                            style={[styles.buttonContainer, {backgroundColor: isFocused ? "rgba(244, 80, 80, 0.2)" : "#fff"}]}
                        >
                            <View style={styles.itemContainer}>
                                <Feather name={tab.icon} size={24} color={isFocused ? "#F45050" : "#C1C1C1"}/>
                                {isFocused && <Text style={styles.itemText}>{tab.name}</Text>}
                            </View>
                        </Pressable>
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.18,
        shadowRadius: 2.00,
        elevation: 4,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: 5,
        paddingVertical: 20,
    },
    mainItemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width / 3,
    },
    buttonContainer: {
        borderRadius: 30,
        paddingVertical: "4%",
        paddingHorizontal: width * 0.04,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    itemText: {
        fontSize: 14,
        color: "#F45050",
        marginLeft: "10%"
    }
});
