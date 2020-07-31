import React from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack' 
import Home from '/Users/praneeth/Desktop/sdsd/Social/screens/Home.js';
import Loging from './screens/Loging';
import Loading from './screens/Loading';
import Register from './screens/Register';
import Notification from './screens/Notification';
import Posts from './screens/Posts';
import Profile from './screens/Profile';
import Message from './screens/Message';


/* export default class App extends React.Component {
  render() {
    return (
      <Loging/>
    );
  }
} */

const AppStack = createStackNavigator(

  { Home: Home } 
)

const AuthStack = createStackNavigator({
  Loging: Loging,
  Register: Register,
  Profile:Profile,
  Message:Message,
  Posts:Posts,
  Notification:Notification

});

export default createAppContainer (
  createSwitchNavigator (
      {
        Loging: Loging,
        App : AppStack,
        Auth: AuthStack

      },
      {
        initialRouteName:"Loging"
      }

  )

);

