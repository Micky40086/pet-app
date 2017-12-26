import React, { Component } from 'react';
import SelectField from './SelectField'

import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Random extends Component<{}> {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.container} >
        <View style={styles.image}>
          <Image source={require('../images/weather1.png')}/>
        </View>
        <View style={styles.text}>
          <Text style={{fontSize:18, color: '#fff'}}>今天天氣 <Text style={{fontSize:24}}>18℃</Text></Text>
          <Text style={{fontSize:18, color: '#fff', marginTop:10}}>適合我的寵物是...</Text>
        </View>
        <View style={styles.select_field}>
          <SelectField/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(137,191,73)',
  },
  image: {
    marginTop: '10%',
    alignSelf: 'center',
  },
  text: {
    marginTop: 20,
    alignSelf: 'center',
  },
  select_field: {
    marginTop: '10%',
    alignSelf: 'center',
  }
});