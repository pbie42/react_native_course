import React, { Component } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

class PlaceForm extends Component {
  state = {
    placeName: ''
  };

  placeNameChangeHandler = val => {
    this.setState({ placeName: val });
  };

  placeCheckAndSubmit = () => {
    if (this.state.placeName.trim() === '') return;
    this.props.placeSubmitHandler(this.state.placeName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}
          style={styles.placeInput}
          placeholder="An Awesome Placeholder"
        />
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={this.placeCheckAndSubmit}
        />
      </View>
    );
  }
}

export default PlaceForm;

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
    // backgroundColor: 'green'
  },
  placeInput: {
    // backgroundColor: 'blue',
    width: '70%'
  },
  placeButton: {
    width: '30%'
  }
});
