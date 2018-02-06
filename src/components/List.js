import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';



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
			return this.state.albums.map(album => 
				<AlbumDetail key={album.title} album={album}/>
				);
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