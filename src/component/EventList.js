import React, {Component} from 'react'
import {FlatList} from 'react-native'
import {EventItem} from './EventItem.js'

export class EventList extends Component{
	constructor(props) {
    	super(props);
		this.state = { events : [] };
	}

	componentWillMount() {
		fetch('https://connpass.com/api/v1/event/?keyword=python')
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState(
					{ events: responseJson['events'] });
			})
			.catch((error) => {
			console.log(error);
			});
	}

	_keyExtractor = (item) => String(item.event_id);

	render(){
		return (
			<FlatList
				data={this.state.events}
				keyExtractor={this._keyExtractor}
				renderItem={({item}) => 
					<EventItem 
						title={item.title}
						startdate={item.started_at}
						onPress={this.props.onPress}
					/>
				}
			/>
		);
	}
}