import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

import Login from './src/Components/Login'
import Home from './src/Components/Home'
import * as React from 'react';
import {Provider} from 'react-redux';
import store from './src/Services/rootreducer';

const Drawer = createDrawerNavigator();
const Stack=createStackNavigator();
const MyStack = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen  name="Login" component={Login} />
    <Drawer.Screen name="Home" component={Home} />
  </Drawer.Navigator>
  );
};


const App = () => {
  return (
    <Provider store= {store}>
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    </Provider>
   
  );
};

export default App;