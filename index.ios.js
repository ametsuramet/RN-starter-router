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
  View
} from 'react-native';

import Router from './App/Router';

class Belanza extends Component {
  render() {
    return (
      <Router />
    );
  }
}


AppRegistry.registerComponent('Belanza', () => Belanza);
