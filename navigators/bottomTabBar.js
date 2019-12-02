import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Chefs from '../screens/Chefs';

export default createMaterialBottomTabNavigator(
    {
      Chefs: { screen: Chefs }
    },
    {
      initialRouteName: 'Chefs',
      activeColor: '#f0edf6',
      inactiveColor: '#3e2465',
      barStyle: { backgroundColor: '#694fad' },
    }
  );