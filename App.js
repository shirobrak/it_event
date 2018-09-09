/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Router from './RootStack';

type Props = {};
class App extends Component<Props> {

  render() {
    return (
      <Router />
    );
  }
}
export default App;

