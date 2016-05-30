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
} from 'react-native';
import styles from '../Styles/login';

export default class Signup extends Component { 
  constructor(props) {
    super(props);
  
    this.state = {
      textUser:"",
      textPwd:""
    };
  }
  _pressLogin(){
        this.props.navigator.push({id:'login',sceneConfig:Navigator.SceneConfigs.FloatFromBottom})
    }

  render() {
    return (
      <View style={styles.container}>
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
          <View style={styles.button}>
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
