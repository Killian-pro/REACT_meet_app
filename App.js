import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';



import Home from './screens/Home';
import Likepage from './screens/Likepage';
import Discussion from './screens/Discussion';
import Profil from './screens/Profil';
import Reglages from './screens/Reglages';
import Connexion from './screens/Connexion';


const botNavigator = createBottomTabNavigator({

  Home: { screen: Home },
  Likescreen: { screen: Likepage },
  msgscreen: { screen: Discussion },

});

const MainNavigator = createStackNavigator({
  Connexion: {
    screen: Connexion,
    navigationOptions: {
      header: null,
    },
  },
  Home: {
    screen: botNavigator,
    navigationOptions: {
      header: null,
    },
  },
  Profil: {
    screen: Profil,
    navigationOptions: {
      header: null,
    },
  },
  Reglages: {
    screen: Reglages,
    navigationOptions: {
      header: null,
    },
  },
  Discussion: {
    screen: Discussion,
    navigationOptions: {
      header: null,
    },
  },
  Likepage: {
    screen: Likepage,
    navigationOptions: {
      header: null,
    },
  },

});



const App = createAppContainer(MainNavigator);

export default App;