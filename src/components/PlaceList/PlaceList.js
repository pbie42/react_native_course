import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import ListItem from '../ListItem/ListItem';

const PlaceList = props => {
  const placesOutput = props.places.map((place, i) => (
    <ListItem
      key={i}
      place={place}
      onItemPressed={() => props.onItemDeleted(i)}
    />
  ));
  return <ScrollView style={styles.placesContainer}>{placesOutput}</ScrollView>;
};

const styles = StyleSheet.create({
  placesContainer: {
    width: '100%'
    // alignItems: 'center'
  }
});

export default PlaceList;
