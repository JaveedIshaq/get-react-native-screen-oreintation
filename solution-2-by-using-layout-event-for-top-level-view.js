import React, { Component } from 'react'
  import {
    Dimensions,
    StyleSheet,
    Text,
    View
  } from 'react-native'

  export default class App extends Component {
    onLayout(e) {
      const {width, height} = Dimensions.get('window')
      console.log(width, height)
    }

    render() {
      return (
        <View
          onLayout={this.onLayout.bind(this)}
          style={styles.container}
        >
          <Text style={styles.welcome}>
            Some Text
          </Text>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    }
  })
