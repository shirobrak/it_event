import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native';
 
class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Detail',
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <WebView
        source={{uri: params.url}}
        style={{marginTop: 0}}
      />
    );
  }
}
export default DetailsScreen;

