import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';

class AlbumDetail extends Component {
	render(){
		return(
			<Card>
                <Text>{this.props.album.title}</Text>
			</Card>
			);
	}


};



export default AlbumDetail;