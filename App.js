

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home  from './Home';
import Meals from './Meals';



class HomeScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Home navigation={navigation}/>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home:{screen: HomeScreen,
        navigationOptions:{
          header:null,
        }} ,
  Meals:{screen:Meals,
        navigationOptions:{
          header:null,
        }

  }
  

  
  
  
}
        

  
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component{
  
  render(){
    return <AppContainer/>;
  }
}



const styles = StyleSheet.create({
 
 
});


