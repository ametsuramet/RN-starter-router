import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator
} from 'react-native';

export default class Feature extends Component {

	_pressLogin(){
        this.props.navigator.push({id:'login',sceneConfig:Navigator.SceneConfigs.FloatFromBottom})
    }

	render() {
		return (
			<TouchableOpacity
			  onPress={()=>this._pressLogin()}
			  underlayColor='transparent'>
				<Text>Masuk Ke Login</Text>
			</TouchableOpacity>
		);
	}
}
