import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator,
  ToolbarAndroid,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;
export default class Feature extends Component {

	_pressLogin(){
        this.props.navigator.push({id:'login',sceneConfig:Navigator.SceneConfigs.FloatFromBottom})
    }

	render() {
		return (
			<View>
			<Ionicons.ToolbarAndroid
      style={styles.toolbar}
      navIconName="md-arrow-back"
      actions={[{title: 'Settings', show: 'always'}]}
      onActionSelected={this.onActionSelected} />
			</View>
		);
	}
}


var styles = StyleSheet.create({
  toolbar: {
    position: "absolute",
    top:0,
    left:0,
    backgroundColor:'#ddd',
    width:deviceWidth,
    height:60
  }
})