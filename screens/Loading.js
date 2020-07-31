import React from 'react';
import { StyleSheet, Text, View ,ActivityIndicator} from 'react-native';

export default class Loading extends React.Component {
  componentDidMount(){

     
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading ...</Text>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});