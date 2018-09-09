import React, {Component} from 'react'
import {Card} from 'react-native-elements'

export class EventItem extends Component{
	render(){
		return (
			<Card
  			  title={this.props.title}
			  image={require('../../images/python.jpg')}>
			</Card>
		);
	}
}
