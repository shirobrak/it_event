import React, {Component} from 'react'
import {FlatList, TouchableOpacity} from 'react-native'
import {EventItem} from '../component/EventItem'

class EventListScreen extends Component{
	static navigationOptions = {
		title: 'Connpass イベント情報',
	  };

	constructor(props) {
    	super(props);
		this.state = { events : [] };
	}

	componentWillMount() {
		fetch('https://connpass.com/api/v1/event/?keyword=Laravel')
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
					<TouchableOpacity onPress={() => this.props.navigation.navigate('EventDetails', {url: item.event_url})}>
						<EventItem 
							title={item.title}
							startdate={item.started_at}
						/>
					</TouchableOpacity>
				}
			/>
		);
	}
}
export default EventListScreen;