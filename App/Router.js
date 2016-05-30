/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Feature from './Components/Feature';
import Login from './Components/Login';
import Signup from './Components/Signup';



export default class Router extends Component {
	_renderScene(route,navigator) {
		switch (route.id) {
	      case 'login' :
	        return (<Login navigator={navigator} title={route.title} />)
	      break;

        case 'signup' :
          return (<Signup navigator={navigator} title={route.title} />)
        break;
	     

	      default :
	        return (<Feature navigator={navigator} title={route.title}  />)
		  break;
		}

	}
	render() {
		return (
			  <Navigator
			    initialRoute={{id:'login',title:"Home"}}
			    renderScene={ (route,navigator) => this._renderScene(route,navigator) }
  				configureScene={(route) => {
  			          if (route.sceneConfig) {
  			            return route.sceneConfig;
  			          }
  			          return Navigator.SceneConfigs.PushFromRight;
  			        }}/>
		);
	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});