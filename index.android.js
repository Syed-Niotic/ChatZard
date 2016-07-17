
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
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

class ChatZard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RootNavigator ref="rootNavigator"/>
      </View>
    );
  }
}



AppRegistry.registerComponent('ChatZard', () => ChatZard);
