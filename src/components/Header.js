import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


class Header extends Component {

  render(){
    return(
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>{this.props.headerText}</Text>
        </View>
      )
  }

}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  },

  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    paddingTop: 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,


  },
});


export default Header;