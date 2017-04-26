import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import dismissKeyboard from 'react-native-dismiss-keyboard';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  openRegistration() {
    alert('openRegistration');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.status}>
          <Text style={styles.text}>Cia bus info apie duoto kraujo kieki ir t.t.</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => this.openRegistration()}>
          <Text style={[styles.text, {color: '#fff'}]}>REGISTRUOTIS</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: 28,
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },

  status: {
    width: 200,
    height: 200,
    borderRadius: 200,
    borderColor: '#000',
    borderWidth: 1,
    justifyContent: 'center',
    marginBottom: 28
  },

  button: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    width: '100%',
    borderRadius: 6,
    marginVertical: 7,
    backgroundColor: '#D84A38'
  },

  text: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
    color: '#000',
    margin: 10
  }
});

export default HomeScreen;
