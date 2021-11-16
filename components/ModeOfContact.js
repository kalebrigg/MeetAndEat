import React from 'react';
import {View, Text, StyleSheet,Image,SafeAreaView, TextInput, Button, Alert, TouchableOpacity, CheckBox } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Header from './Header.js';
import RadioGroup from 'react-native-radio-buttons-group';
import {useState} from "react";
import MapView from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Footer from './Footer.js';

const ModeOfContact = ( {navigation} ) => {

  const radioButtonsData = [
  {
    id: '1',
    label: 'Call',
    value: 'option1',
    color: 'black',
    selected: true,
  },
  {
    id: '2',
    label: 'Text',
    value: 'option2',
    color: 'black',
    selected: false,
  },
  {
    id: '3',
    label: 'Social Media',
    value: 'option3',
    color: 'black',
    selected: false,
  },
];

const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  const onPressRadioButton = radioButtonsArray => {
    console.log(radioButtonsArray);
    setRadioButtons(radioButtonsArray);
  };


  return (
    <View styles={styles.container}>
      <SafeAreaView>

      <Text style={styles.label}> Prefered contact method: </Text>

      <View style={styles.radioContainer} >
        <RadioGroup
          radioButtons={radioButtons}
          onPress={onPressRadioButton}
          layout="row"
          style={styles.radio}
        />
      </View>

      <View>
        <TextInput
        placeholder="Phone Number or  Platform + Username"
        style={styles.input}
        />
      </View>

      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({

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
  },


  radio: {
    color:'black',
    fontColor: 'black'
  },

  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color:"black",
  },

  input: {
    borderWidth:2,
    borderColor:'#000000',
    borderRadius: 15,
    textAlign:'center',
    width:"80%",
    height:42,
    backgroundColor:"white",
    marginLeft:"10%",
    marginRight:"10%",
    marginTop:10,
  },

});

export default ModeOfContact;
