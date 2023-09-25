import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import TabBar from "@components/tabBar/TabBar";
import React from "react";
import FavoritesScreen from "@screens/favorites/FavoritesScreen";
import SettingsScreen from "@screens/settings/SettingsScreen";
import StackNavigatorHome from "@navigation/StackNavigatorHome";

const Tab = createBottomTabNavigator();
type FeatherIconName = 'home' | 'heart' | 'settings';

export interface ITab {
    id: number,
    name: string,
    icon: FeatherIconName,
    component: any
}

const tabs: ITab[] = [
    {id: 0, name: 'Home', icon: 'home', component: StackNavigatorHome},
    {id: 1, name: 'Favorites', icon: 'heart', component: FavoritesScreen},
    {id: 2, name: 'Settings', icon: 'settings', component: SettingsScreen}
];

export default function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBar={props => <TabBar {...props} tabs={tabs}/>}
            screenOptions={{
                headerShown: false,
            }}
        >
            {tabs && tabs.map((tab) => (
                <Tab.Screen key={tab.id} name={tab.name} component={tab.component}/>
            ))}
        </Tab.Navigator>
    )
}