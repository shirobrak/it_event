import React, {Component} from 'react'
import {Button} from 'react-native'
import {Card} from 'react-native-elements'

export class EventItem extends Component{
	render(){
		return (
			<Card
  			  title={this.props.title}
			  image={require('../../images/python.jpg')}>
    		  <Button
                icon={{name: 'eye', type: 'octicon'}}
            	backgroundColor='#03A9F4'
            	title='もっとみる'
				onPress={this.props.onPress}/>
			</Card>
		);
	}
}
