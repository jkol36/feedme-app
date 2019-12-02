import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Chefs from '../screens/Chefs';
import ChefDetails from '../screens/ChefDetails';

const MainNavigator = createStackNavigator({
  ChefScreen: {screen: Chefs},
  ChefDetails: {screen: ChefDetails}
});

const App = createAppContainer(MainNavigator);

export default App;