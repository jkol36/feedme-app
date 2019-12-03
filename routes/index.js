import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, createTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Chefs from '../screens/Chefs';
import MyFeedme from '../screens/MyFeedme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppNavigator from '../navigators/appNavigators';
import ChefDetails from '../screens/ChefDetails';
import Ordering from '../screens/Ordering';
import CheckoutBank from '../screens/CheckoutBank';
import CheckoutStripe from '../screens/CheckoutStripe';



const StackNavigator = createStackNavigator({
    Chefs,
    MyFeedme,
    ChefDetails,
    Ordering,
    CheckoutBank,
    CheckoutStripe
});

const TabNavigator = createBottomTabNavigator({
    Chefs,
    MyFeedme
})

export default createAppContainer(StackNavigator);