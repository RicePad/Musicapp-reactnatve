import React, { Component } from 'react';
import { Text, View, Image, Linking, TouchableOpacity } from 'react-native';



class Button extends Component {
	render(){
		return(
			<TouchableOpacity onPress={this.props.onClick} style={styles.buttonStyle}>
				<Text style={styles.textStyle}>{this.props.text}</Text>
			</TouchableOpacity>
			)
	}

}


export default Button;


const styles = {
	textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
}