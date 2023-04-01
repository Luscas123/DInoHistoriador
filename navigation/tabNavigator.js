import React, {Component} from "react";
import { Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Feed from "../screens/feed";
import CreateStory from "../screens/createStory";

const Tab = createMaterialBottomTabNavigator()

export default class TabNavigator extends Component {
    render(){
        return(
            <Tab.Navigator>
                <Tab.Screen name = "Feed" component={Feed} />
                <Tab.Screen name = "Create Story" component={CreateStory}/>
            </Tab.Navigator>
        )
    }
}