import { createStackNavigator , createAppContainer } from 'react-navigation';
import SearchScreen from './src/Screens/SearchScreen';
import ResultsShowScreen from './src/Screens/ResultsShowScreen';

const navigator= createStackNavigator({
  Search : SearchScreen,
  ResultsShow: ResultsShowScreen

},{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title : 'Business Search'
  }

});

export default createAppContainer(navigator);