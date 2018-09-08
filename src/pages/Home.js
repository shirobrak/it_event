import React, { Component } from 'react';
import { EventList } from '../component/EventList'
import {
  Actions,
} from 'react-native-router-flux';
 
class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Event List',
  };
    
  constructor(props) {
    super(props);
    this.state = {
      event_url : "https://google.com"
    };
  }

  setEventUrl(url){
    this.setState({
      event_url: url
    })
  }

  _onPress(){
    this.props.navigation.navigate('Details', {url: this.state.event_url});
  }

  render() {
    return (
      <EventList
        onPress={() => this._onPress()}
      />
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