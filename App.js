import React from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { CardIOModule, CardIOUtilities } from 'react-native-awesome-card-io';

export default class App extends React.Component {
  componentWillMount() {
    if (Platform.OS === 'ios') {
      CardIOUtilities.preload();
    }
  }

  scanCard() {
    CardIOModule
      .scanCard()
      .then(card => {
        // the scanned card
      })
      .catch(() => {
        // the user cancelled
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.scanCard.bind(this)}>
          <Text>Scan card!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
