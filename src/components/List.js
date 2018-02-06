import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';



export const ROOT_URL = "http://reduxblog.herokuapp.com/api/music_albums"


class List extends Component {
	constructor(props){
		super(props);

		this.state = {
			albums: []
		}
	}
	componentWillMount() {
    	axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }



		renderAlbums(){
			return this.state.albums.map(album => <Text key={album.title}>{album.title}</Text>);
		}

	render(){
		return(
				<View>
					{this.renderAlbums()}
				</View>
			)
	}
}


export default List;