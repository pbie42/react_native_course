import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import PlaceForm from './src/components/PlaceForm/PlaceForm';
import PlaceList from './src/components/PlaceList/PlaceList';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

export default class App extends Component {
  state = {
    places: []
  };

  placeSubmitHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  };

  placeDeletedHandler = index => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place, i) => i !== index)
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceForm placeSubmitHandler={this.placeSubmitHandler} />
        <PlaceList
          places={this.state.places}
          onItemDeleted={this.placeDeletedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  placeText: {
    color: 'black'
  }
});
