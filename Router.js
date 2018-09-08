import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Home from './src/pages/Home';
import Detail from './src/pages/Detail';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="home" initial component={Home}/>
        <Scene key="detail" component={Detail} />
      </Scene>
     </Router>
  )
}
export default RouterComponent;