import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    halfHeight: {
        flex: .5,
        backgroundColor: '#FF3366',
        alignItems: "center",
        justifyContent: "center",
        elevation: 2
    },
    quarterHeight: {
        flex: .25,
        backgroundColor: '#FFFFFF',
        padding:20,
        alignItems: 'center'
    },
    logo:{
      width: 300,
      height: 200
    },
    button:{
      padding:10,
      width:300,
      marginBottom:10,
      backgroundColor:'#FF3366',
      borderRadius: 3,
      position:'relative'
    },
    textButton:{
      textAlign: 'center',
      color:'#ffffff'
    },
    iconButton:{
      position:'absolute',
      left:10,
      top:10
    }
});