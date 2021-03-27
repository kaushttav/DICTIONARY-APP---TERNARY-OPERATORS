import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  speak() {
    var thingToSay = this.state.text;
    Speech.speak(thingToSay);
    console.log(thingToSay)
  }

  render() {
    return (
      <View style = {styles.container}>
        <SafeAreaProvider>
        <Header
            backgroundColor={'#6495ED'}
            centerComponent={{
              text: 'Text to Speech Converter App',
              style: { color: 'white', fontSize: 28 },
            }}
          />
        </SafeAreaProvider>
        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://media.istockphoto.com/vectors/people-talk-speak-and-listen-stock-vector-vector-id1066199720?k=6&m=1066199720&s=170667a&w=0&h=w8cm0kMtjGZfx1pVS2zSsk7wCRGmut86wgijEKp4VAQ=',
          }}
        />
          
        <TextInput
            style = {styles.inputBox}
            onChangeText={text => {
              this.setState({ text: text });
            }}
            value={this.state.text}
            defaultValue = {"The"}
            placeholder = "Type your text here..."
          />

        <TouchableOpacity style = {styles.speechButton}
        onPress = {() => {
          this.state.text === '' || this.state.text == ' '
          ? alert("Please type your text to hear the speech.")
          //rather than checking for the starting charcter, I am checking for the entire string using indexOf(). It returns -1 if the string is not there
          : (this.state.text.indexOf('@') !== -1
          || this.state.text.indexOf('#') !== -1
          || this.state.text.indexOf('$') !== -1
          || this.state.text.indexOf('%') !== -1
          || this.state.text.indexOf('^') !== -1
          || this.state.text.indexOf('&') !== -1
          || this.state.text.indexOf('*') !== -1
          || this.state.text.indexOf('(') !== -1
          || this.state.text.indexOf(')') !== -1
          || this.state.text.indexOf('<') !== -1
          || this.state.text.indexOf('>') !== -1
          || this.state.text.indexOf('~') !== -1
          || this.state.text.indexOf('`') !== -1
          || this.state.text.indexOf('[') !== -1
          || this.state.text.indexOf(']') !== -1
          || this.state.text.indexOf(';') !== -1
          || this.state.text.indexOf('{') !== -1
          || this.state.text.indexOf('}') !== -1
          //escape character for forward slash
          || this.state.text.indexOf('\\') !== -1
          || this.state.text.indexOf('|') !== -1
          || this.state.text.indexOf('_') !== -1
          || this.state.text.indexOf('£') !== -1
          || this.state.text.indexOf('₹') !== -1
          || this.state.text.indexOf('¥') !== -1
          || this.state.text.indexOf('€') !== -1
          ? alert("Please avoid using special characters.")
          : this.speak())
        }}>
          <Text style = {styles.displayText}>Hear Speech</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98FB98'
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    fontSize: 20,
    borderColor: '#566B73',
    color: '#2C5361',
    borderRadius: 10
  },
  displayText: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white'
  },
  speechButton:{
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 50,
    backgroundColor: '#FFA500'
  },
  imageIcon: {
    width: 350,
    height: 200,
    marginTop: 20,
    alignSelf: 'center'
  }
});