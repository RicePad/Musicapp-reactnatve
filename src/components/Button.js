import React, { Component } from 'react';
import { Text, View, Image, Linking, TouchableOpacity } from 'react-native';



class Button extends Component {
	render(){
		return(
			<TouchableOpacity>
				<Text>CLICK ME</Text>
			</TouchableOpacity>
			)
	}

}


export default Button;
