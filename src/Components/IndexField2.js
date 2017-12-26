import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

export default class IndexField2 extends Component<{}> {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>寵物蛋</Text>
        <View style={styles.image}>
          <Image source={require('../images/egg.png')}/>
        </View>
        <TouchableHighlight onPress={this._onPressButton} style={styles.button}>
          <View>
            <Text style={styles.buttonText}>送蛋去 -></Text>
          </View>
        </TouchableHighlight>
        <Text style={styles.content}>推薦一顆蛋給想養寵物的朋友</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0,189,212)',
  },
  title: {
    marginLeft:20,
    marginTop:20,
    color: '#fff',
  },
  image: {
    position: 'absolute',
    left: 75,
    bottom: 30,
  },
  content: {
    position: 'absolute',
    width: 150,
    right: 10,
    bottom: 30,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 30,
    position: 'absolute',
    right: 20,
    top: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});