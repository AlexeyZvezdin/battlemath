import React from 'react';
import { TextInput, Button, Image, StyleSheet, Text, View } from "react-native";
import './App.css';

class App extends React.Component {

  state = { 
    text: ''
  }

  render() {
  return (
    <View style={styles.root}>
      <Text>Battle Math</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      <p>{ this.state.text }</p>
      <Button
        onPress={() => console.log('press')}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default App;
