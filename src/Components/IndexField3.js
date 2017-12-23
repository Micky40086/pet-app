import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

export default class IndexField3 extends Component<{}> {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>你關心的寵物動態</Text>
        <View style={styles.image}>
          <Image source={require('../images/fox.png')}/>
        </View>
        <TouchableHighlight onPress={this._onPressButton} style={styles.button}>
          <View>
            <Text style={styles.buttonText}>分享開心 -></Text>
          </View>
        </TouchableHighlight>
        <Text style={styles.content}>好消息，來自於：桃園市動物保護教育園區您關心的寵物已經找到家了！</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(172,81,188)',
  },
  title: {
    marginLeft:20,
    marginTop:20,
    color: '#fff',
  },
  image: {
    flexDirection: 'row', 
    alignItems:"flex-end",
    marginLeft: 20,
  },
  content: {
    position: 'absolute',
    width: 150,
    right: 10,
    bottom: 30,
    color: '#fff',
    fontSize: 16,
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