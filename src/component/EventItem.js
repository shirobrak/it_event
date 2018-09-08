import React, {Component} from 'react'
import {Text} from 'react-native'
import {Card} from 'react-native-elements'

export class EventItem extends Component{
	render(){
		return (
			<Card
  			  title={this.props.title}
  			  image={require('../../images/python.jpg')}>
  			  <Text style={{marginBottom: 10}}>
    			{this.props.startdate}
  			  </Text>
			</Card>
		);
	}
}
