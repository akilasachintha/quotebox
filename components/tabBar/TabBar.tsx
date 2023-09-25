import React, {useRef} from 'react';
import {Animated, Dimensions, Easing, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Feather} from "@expo/vector-icons";
import {ITab} from "@navigation/TabNavigator";

const {width} = Dimensions.get('window');

interface ITabBarProps {
    state: any,
    navigation: any,
    tabs: ITab[]
}

export default function TabBar({state, navigation, tabs}: ITabBarProps) {
    const fadeAnim = useRef(new Animated.Value(0.5)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
            easing: Easing.out(Easing.exp),
        }).start();
    };

    return (
        <Animated.View style={[styles.mainContainer, {opacity: fadeAnim}]} onLayout={fadeIn}>
            {tabs.map((tab) => {
                const isFocused = state.index === tab.id;

                const onPress = () => {
                    if (isFocused) {
                        if (tab.name === 'Home') {
                            navigation.navigate('HomeScreen');
                        }
                    }

                    if (!isFocused) {
                        if (tab.name === 'Home') {
                            navigation.navigate('HomeScreen');
                        }
                        navigation.navigate(tab.name);
                    }
                };

                return (
                    <View key={tab.id} style={styles.mainItemContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={onPress}
                            style={[styles.buttonContainer, {backgroundColor: isFocused ? "rgba(244, 80, 80, 0.2)" : "#fff"}]}
                        >
                            <View style={styles.itemContainer}>
                                <Feather name={tab.icon} size={24} color={isFocused ? "#F45050" : "#C1C1C1"}/>
                                {isFocused && <Text style={styles.itemText}>{tab.name}</Text>}
                            </View>
                        </TouchableOpacity>
                    </View>
                );
            })}
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 24,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: 5,
        paddingVertical: 15,
    },
    mainItemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width / 3,
    },
    buttonContainer: {
        borderRadius: 30,
        paddingVertical: "8%",
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
