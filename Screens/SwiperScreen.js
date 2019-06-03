import React from 'react';
import {
  AsyncStorage,
  View,
  StyleSheet,
  Image, 
  Text, 
  SafeAreaView, 
  TouchableOpacity
} from 'react-native';
import { Button, Input } from 'react-native-elements';
import { colors } from '../Constants/theme'
import Swiper from "react-native-swiper";
import universalHaptic from "../Haptic";
import { Haptic } from "expo";

class SwiperScreen extends React.Component {
    constructor(props) {
      super(props)
    }
    static navigationOptions = {
      title: 'Please sign in',
    };
    state = { locked: true };

    handleScreenTransition() {
      this.props.navigation.navigate('AuthLoading')
    }

    render() {
      return (
        <View style={styles.container}>
            <Swiper style={styles.wrapper} loop={false}>
              <View style={styles.slide1}>
                <Text style={styles.text}>Bonjour tout le monde</Text>
                <Text style={styles.text}>Swip de droite a gauche pour voir la suite</Text>
              </View>
              <View style={styles.slide2}>
                <Text style={styles.text}>Voici l'application qui te facilite tes courses</Text>
              </View>
              <View style={styles.slide3}>
                <Text style={styles.text}>Ça n'a jamais était aussi simple de faire les courses 😁</Text>
                <TouchableOpacity
                      onPress={() => this.handleScreenTransition()}
                >
                  <Text>GO</Text>
                </TouchableOpacity>
                
              </View>
            </Swiper>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      //alignItems: 'center',
      paddingLeft: 10,
      //backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      //alignItems: 'center',
      paddingLeft: 10,
      //backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      //alignItems: 'center',
      paddingLeft: 10,
      //backgroundColor: '#92BBD9'
    },
    text: {
      color: '#f8a5c2',
      fontSize: 40,
      fontWeight: 'bold'
    }
  });


export default SwiperScreen;
