import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator,
  TextInput,
  Alert,
  Image
} from 'react-native';
import styles from '../Styles/login';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class Login extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      textUser:"",
      textPwd:""
    };
  }
	_pressLogin(){
     if (this.state.textUser=='admin' && this.state.textPwd=='admin'){
          this.props.navigator.push({id:'feature',sceneConfig:Navigator.SceneConfigs.FloatFromBottom})     
     }else{
      Alert.alert('Perhatian', 'Username dan password salah')
     }
    }

  _pressSignup(){
    this.props.navigator.push({id:'signup',sceneConfig:Navigator.SceneConfigs.FloatFromBottom})
  }

	render() {
		return (
      <View style={styles.container}>
        <View style={styles.halfHeight}>
          <Image source={require('../../images/TPD.jpg')} style={styles.logo}/>
        </View>
        <View style={styles.quarterHeight}>
          <Text>
            Username
          </Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(textUser) => this.setState({textUser})}
            value={this.state.textUser}/>
            <Text>
            Password
          </Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(textPwd) => this.setState({textPwd})}
            value={this.state.textPwd} secureTextEntry={true}/>
        </View>
        <View style={[styles.quarterHeight, {backgroundColor: '#CCC'}]}>
          <TouchableOpacity 
            onPress={()=>this._pressLogin()}
            underlayColor='transparent'>
          <View style={styles.button} >
            <Icon name="rocket" size={20} color="#FFF" style={styles.iconButton} />
            <Text style={styles.textButton}>
              Login
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={()=>this._pressSignup()}
            underlayColor='transparent'>
          <View style={styles.button}>
            <Text style={styles.textButton}>
              Sign UP
            </Text>
          </View>
          </TouchableOpacity>
        </View>
      </View>
		);
	}
}
