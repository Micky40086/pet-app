import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

export default class IndexField1 extends Component<{}> {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>測驗你的寵物相似指數</Text>
        <View style={styles.image}>
          <Image source={require('../images/fox.png')} />
        </View>
        <TouchableHighlight onPress={this._onPressButton} style={styles.button}>
          <View>
            <Text style={styles.buttonText}>前往測驗 -></Text>
          </View>
        </TouchableHighlight>
        <Text style={styles.content}>如果你有一隻寵物，那麼你的寵物將會是....</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(137,191,73)',
  },
  title: {
    marginLeft:20,
    marginTop:20,
    color: '#fff',
  },
  image: {
    position: 'absolute',
    left: 20,
    bottom: 20,
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