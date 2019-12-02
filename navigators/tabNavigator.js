import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Chefs from '../screens/Chefs';
import ChefDetails from '../screens/ChefDetails';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabNavigator = createBottomTabNavigator({
    Chefs,
    ChefDetails
});

export default createAppContainer(TabNavigator);