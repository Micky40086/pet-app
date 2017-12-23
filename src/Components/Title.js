import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Title extends Component<{}> {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.container} >
        <View style={styles.top_bg}/>
        <View style={styles.title}>
          <Text style={styles.title_font}>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    height: 60,
  },
  top_bg: {
    height: 10,
    backgroundColor: 'rgb(249,146,23)',
  },
  title: {
    backgroundColor: 'rgb(249,146,23)',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title_font: {
    fontSize: 20,
    color: '#fff',
  },
});