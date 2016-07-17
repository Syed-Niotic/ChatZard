<<<<<<< HEAD
=======
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
>>>>>>> 935bbd4fd93746dfd4fb103845fe9b93663f63f2

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
<<<<<<< HEAD
import RootNavigator from 'ChatZard/Views/RootNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  }
});
=======
>>>>>>> 935bbd4fd93746dfd4fb103845fe9b93663f63f2

class ChatZard extends Component {
  render() {
    return (
      <View style={styles.container}>
<<<<<<< HEAD
        <RootNavigator ref="rootNavigator"/>
=======
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
>>>>>>> 935bbd4fd93746dfd4fb103845fe9b93663f63f2
      </View>
    );
  }
}

<<<<<<< HEAD

=======
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
>>>>>>> 935bbd4fd93746dfd4fb103845fe9b93663f63f2

AppRegistry.registerComponent('ChatZard', () => ChatZard);
