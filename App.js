import { createStackNavigation, createAppContainer } from 'react-navigation';
import splash from './splash';
import login from './login';

const App = createStackNavigation({
  splash: { screen: splash },
  login: { screen: login }
});
export default createAppContainer(App);