import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/pages/Home';
import DetailsScreen from './src/pages/Detail';
import EventListScreen from './src//component/EventList';
const RootStack = createStackNavigator(
  {
    EventList: EventListScreen,
    EventDetails: DetailsScreen,
  },
  {
    initialRouteName: 'EventList',
  }
)

export default RootStack;