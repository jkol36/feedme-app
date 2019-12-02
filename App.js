import * as React from 'react';
import { StyleSheet } from 'react-native';
import Colors from './constants/Colors';
import { BottomNavigation, Text } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Routes from './routes'
import BottomTabBar from './navigators/bottomTabBar';



export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Routes />
    );
  }
}
