/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

const width = Dimensions.get('window').width;

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', backgroundColor: 'green', justifyContent: 'center', flex: 1 }}>
        <ScrollView
          contentContainerStyle={styles.view}
          horizontal={true}
          pagingEnabled={true}
          style={styles.scrollview}
        >
          <View style={styles.viewtext}>
            <Text> Mishu </Text>
          </View>
          <View style={styles.viewtext}>
            <Text> Mishu </Text>
          </View>
          <View style={styles.viewtext}>
            <Text> Mishu </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    backgroundColor: 'red',
    overflow: 'visible',
    width: width - 80
  },
  view: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  viewtext: {
    backgroundColor: 'blue',
    height: 200,
    marginHorizontal: 20,
    width: width - 120
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
