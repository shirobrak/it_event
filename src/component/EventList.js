import React, {Component} from 'react'
import {FlatList} from 'react-native'
import {EventItem} from './EventItem.js'

export class EventList extends Component{

	render(){
		return (
			<FlatList
				data={this.props.data}
				extraData={this.state}
				renderItem={({item}) => 
					<EventItem 
						title={item.title}
						startdate={item.started_at}
					/>
				}
			/>
		);
	}
}