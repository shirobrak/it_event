import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/pages/Home';
import DetailsScreen from './src/pages/Detail';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
)

export default RootStack;