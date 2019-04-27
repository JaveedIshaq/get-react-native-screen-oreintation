import React, { Component } from 'react'
  import {
    StyleSheet,
    Text,
    View
  } from 'react-native'

  import Orientation from 'react-native-orientation'

  export default class App extends Component {
    componentDidMount() {
      Orientation.addOrientationListener(this._orientationDidChange)
    }

    componentWillUnmount() {
      Orientation.removeOrientationListener(this._orientationDidChange)
    }

    _orientationDidChange(orientation) {
      console.log(orientation)
    }

    render() {
      return (
        <View style={styles.container}>
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
