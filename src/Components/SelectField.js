import React, { Component } from 'react';
import ListViewSelect from 'react-native-list-view-select';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class SelectField extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      item: "Select Item",
      isVisible: false,
    };
  }

  showPopover() {
    this.setState({isVisible: true});
  }

  closePopover() {
    this.setState({isVisible: false});
  }

  setItem(item) {
    this.setState({ item: item });
  }

  render() {
    const items = [
      "Item 1",
      "Item 2",
      "Item 3",
      "Item 4",
    ];
    return (
      <View style={styles.container} >
        <TouchableOpacity onPress={this.showPopover.bind(this)}>
          <View>
            <Image source={require('../images/select_button.png')}/>
            <View style={styles.text}>
              <Text>{this.state.item}</Text>
            </View>
            <View style={styles.arrow}>
              <Image source={require('../images/shape.png')}/>
            </View>
          </View>
          
        </TouchableOpacity>
        <ListViewSelect
          list={items}
          isVisible={this.state.isVisible}
          onClick={this.setItem.bind(this)}
          onClose={this.closePopover.bind(this)}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
  },
  arrow: {
    position: 'absolute',
    top: 10,
    right: 20,
  },
  text: {
    position: 'absolute',
    top: 15,
    left: 20,
  }
});