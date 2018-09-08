/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from 'react-native-elements';
import {EventList} from './src/component/EventList'

type Props = {};
export default class App extends Component<Props> {
  state = { events: [{title:'hoge'}] };

  componentWillMount() {
    fetch('https://connpass.com/api/v1/event/?keyword=python')
      .then((response) => response.json())
      .then((responseJson) => 
        this.setState({
          events: responseJson.events
        }))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View>
        <EventList
          data={this.state.events}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
