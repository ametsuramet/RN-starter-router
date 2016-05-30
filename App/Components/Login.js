import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator
} from 'react-native';

export default class Login extends Component {
	_pressLogin(){
        this.props.navigator.push({id:'feature'})
    }

	render() {
		return (
			<TouchableOpacity
			  onPress={()=>this._pressLogin()}
			  underlayColor='transparent'>
				<Text>Kembali ke Feature</Text>
			</TouchableOpacity>
		);
	}
}
