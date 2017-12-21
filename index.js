'use scrict'
import React, { Component } from 'react';
import App from './App';
import Title from './src/Components/Title';
import IndexField1 from './src/Components/IndexField1'
import IndexField2 from './src/Components/IndexField2'
import IndexField3 from './src/Components/IndexField3'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS
} from 'react-native';


export default class Demo extends Component {
  constructor(props){
    super(props);
    this.state = {
      tab: 'Page1'
    };
  }
  render() {
    return (
      <TabBarIOS barTintColor="rgb(249,146,23)" tintColor="#fff">
        <TabBarIOS.Item title="首頁" icon={require("./src/images/icons/tab1.png")}
        selected={this.state.tab === 'Page1'}
        onPress={() => this.setState({ tab: 'Page1' })}>
          <View>
            <View>
              <Title name="4 PET"/>
            </View>
            <View style={{display: 'flex', flexDirection: 'column'}}>
              <IndexField1/>
              <IndexField2/>
              <IndexField3 style={{alignSelf: 'stretch'}}/>
            </View>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item title="配對" icon={require("./src/images/icons/tab2.png")}
        selected={this.state.tab === 'Page2'} 
        onPress={() => this.setState({ tab: 'Page2' })}>
          <View>
            <Title name="配對"/>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item title="隨機" icon={require("./src/images/icons/tab3.png")}
        selected={this.state.tab === 'Page3'}
        onPress={() => this.setState({ tab: 'Page3' })}>
          <View>
            <Title name="隨機"/>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item title="寵物蛋" icon={require("./src/images/icons/tab4.png")}
        selected={this.state.tab === 'Page4'}
        onPress={() => this.setState({ tab: 'Page4' })}>
          <View>
            <Title name="寵物蛋"/>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}


const styles = StyleSheet.create({
  indexContainer: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    color: 'brown',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


AppRegistry.registerComponent('demo', () => Demo);
