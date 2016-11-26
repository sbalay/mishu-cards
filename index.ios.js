/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, ScrollView, StyleSheet, Text, View } from 'react-native';

import styles from './styles';

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollviewContent}
          horizontal={true}
          pagingEnabled={true}
          style={styles.scrollview}
        >
          <View style={styles.view}>
            <Text> Mishu </Text>
          </View>
          <View style={styles.view}>
            <Text> Mishu </Text>
          </View>
          <View style={styles.view}>
            <Text> Mishu </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
