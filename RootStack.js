import { 
  createStackNavigator,
} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import DetailsScreen from './src/pages/Detail';
import EventListScreen from './src/pages/EventListScreen'
import NewsScreen from './src/pages/NewsScreen'

const ConnpassStack = createStackNavigator(
  {
    EventList: EventListScreen,
    EventDetails: DetailsScreen,
  },
  {
    headerMode: 'float',
  },
)

const NewsStack = createStackNavigator(
  {
    NewsList: NewsScreen,
    NewsDetails: DetailsScreen,
  },
  {
    headerMode: 'float',
  },
)

const Router = createMaterialBottomTabNavigator(
  {
    News: NewsStack,
    Connpass: ConnpassStack,
  }
)
export default Router;