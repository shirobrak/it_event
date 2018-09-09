import React, { Component } from 'react';
import {
  Actions,
} from 'react-native-router-flux';
 
class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home Screen',
  };
    
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View>
        <Text>Home Page</Text>
      </View>
    );
  }
}
 
const pageStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  height: 200,
  paddingTop: 100
}
const fontStyle = {
  fontSize: 36,
  fontWeight: '600'
}
 
export default HomeScreen;