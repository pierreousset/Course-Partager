import React from 'react';
import {
  AsyncStorage,
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native';
import { Button, Input } from 'react-native-elements';

class HomeScreen extends React.Component {
    constructor(props) {
      super(props)
    }
    static navigationOptions = {
      title: 'Please sign in',
    };
    state = { locked: true };

    render() {
      return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFED46',
    },
  });


export default HomeScreen;
