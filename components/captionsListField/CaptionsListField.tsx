import {ImageBackground, SectionList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {paths} from "@helpers/assetsPaths";
import theme from "../../theme";
import SubSectionsTitleText from "@components/subSectionsTitleText/SubSectionsTitleText";
import TabBarHeight from "@components/tabBar/TabBarHeight";

const captionsList = [
    {
        title: "Social Media Captions",
        data: [
            {
                id: "1",
                imageSource: paths["background-image-1"],
                captionText: "Each day do your best and go to the rest.",
                isFavorite: false,
                copied: false,
            },
            {
                id: "2",
                imageSource: paths["category-romantic"],
                captionText: "Never interrupt your opponent while she’s making a mistake.",
                isFavorite: false,
                copied: false,
            },
            {
                id: "3",
                imageSource: paths["image-day"],
                captionText: "Lucky for you, mirrors can’t laugh out loud.",
                isFavorite: false,
                copied: false,
            },
            {
                id: "4",
                imageSource: paths["trending-post-1"],
                captionText: "I’m not insulting you. I’m describing you.",
                isFavorite: false,
                copied: false,
            },
            {
                id: "5",
                imageSource: paths["background-image-1"],
                captionText: "Never interrupt your opponent while she’s making a mistake.",
                isFavorite: false,
                copied: false,
            }
        ],
    }
];


export default function CaptionsListField() {
    return (
        <View>
            <SectionList
                showsVerticalScrollIndicator={false}
                stickySectionHeadersEnabled={false}
                sections={captionsList}
                keyExtractor={item => item.id}
                renderSectionHeader={({section}) => (
                    <SubSectionsTitleText title={section.title}/>
                )}
                renderSectionFooter={() => (
                    <TabBarHeight/>
                )}
                renderItem={({item}) => (
                    <TouchableOpacity style={styles.captionListItemMainContainer} activeOpacity={0.8}>
                        <ImageBackground source={item.imageSource} style={styles.captionListItemContainer}
                                         imageStyle={styles.captionListItemImage}>
                            <View style={styles.captionListItemImageOverlay}>
                                <Text style={styles.captionListItemCaptionText}>{item.captionText}</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    captionListItemMainContainer: {
        marginHorizontal: theme.screenHorizontalMargin,
        marginVertical: "2%",
    },
    captionListItemContainer: {
        width: "100%",
        height: 200,
    },
    captionListItemImage: {
        borderRadius: 20,
    },
    captionListItemImageOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingHorizontal: "6%",
    },
    captionListItemCaptionText: {
        color: "#fff",
        fontSize: 22,
        textAlign: "left",
        lineHeight: 30,
        fontWeight: 'bold',
    },
});
