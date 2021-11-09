import React from 'react';
import {View, Text, StyleSheet,Image,SafeAreaView, TextInput, Button, Alert, TouchableOpacity, CheckBox } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Header from './Header.js';
import RadioGroup from 'react-native-radio-buttons-group';
import {useState} from "react";
import MapView from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Footer from './Footer.js';

const Profile = ( {navigation} ) => {


  return (
    <View styles={styles.container}>
      <SafeAreaView>

      <Header/>

      <Text style={styles.mainText}>
        Kaleb Rigg
      </Text>
      <Text style={styles.secondaryText}>
        23   -   Male
      </Text>

      <Text style={styles.label}>About Me: </Text>
      <Text style={styles.label}>
        Hi my name is Kaleb. I love chickfila and I'm excited to meet new friends.
        I like playing sports, working out, and watching anime. I am a student at BYU.
      </Text>
      <Text style={styles.label}> Preffered contact method: </Text>

      <Footer/>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({

  mainText: {
    marginTop:15,
    fontSize:26,
    marginLeft:"10%",
    width:324,
    color: 'black',
  },
  secondaryText: {
    marginTop:5,
    fontSize:20,
    marginLeft:"10%",
    width:324,
    color: 'black',
  },

  label: {
    color:'black',
    marginLeft: "10%",
    marginTop:20,
    fontSize: 20,
  },

  center: {
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
  }

});

export default Profile;
