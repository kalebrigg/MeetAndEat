import React from 'react';
import {View, Text, StyleSheet,Image,SafeAreaView, TextInput, Button, Alert, TouchableOpacity, CheckBox } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Header from './Header.js';
import RadioGroup from 'react-native-radio-buttons-group';
import {useState} from "react";
import MapView from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Footer from './Footer.js';

const HomeScreen = ( {navigation} ) => {

  const [nameText, nameChange] = React.useState(null);

  const radioButtonsData = [
  {
    id: '1',
    label: 'Male',
    value: 'option1',
    color: 'black',
    selected: true,
  },
  {
    id: '2',
    label: 'Female',
    value: 'option2',
    color: 'black',
    selected: false,
  },
  {
    id: '3',
    label: 'Either',
    value: 'option1',
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

      <Header/>
      <View style={styles.buttonContainer}>
        <Text style={styles.mainText}>
          Welcome Kaleb,
        </Text>

        <Text style={styles.mainText3}>
          create a new meetup now!
        </Text>
      </View>

      <View style={styles.timeContainer}>
        <Text style={styles.label2}> Time: </Text>
        <TextInput
        placeholder="2:30"
        style={styles.input}
        onChangeText={nameChange}
        value={nameText}
        />
      </View>

      <Text style={styles.label}> Eat With: </Text>

      <View style={styles.radioContainer} >
        <RadioGroup
          radioButtons={radioButtons}
          onPress={onPressRadioButton}
          layout="row"
          style={styles.radio}
        />
      </View>

      <View style={styles.center}>
        <TouchableOpacity
          style={styles.button2} onPress={() => navigation.navigate('Bootup')}>
            <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <Footer/>

      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({

  map:{
    flex:1,
  },

  mainText: {
    fontSize:22,
    textAlign:'center',
    width:324,
    color: 'black',
  },
  mainText2: {
    fontSize:18,
    textAlign:'center',
    width:324,
    color: 'black',
  },
  mainText3: {
    marginTop:4,
    fontSize:18,
    textAlign:'center',
    width:324,
    color: 'black',
  },


  button: {
    marginTop:10,
    flexDirection: 'row',
    justifyContent:'center',
    backgroundColor:"white",
    borderColor:"#000000",
    borderWidth:1,
    borderRadius:5,
  },

  button2: {
    marginTop:10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent:'center',
    backgroundColor:"white",
    borderColor:"#000000",
    borderWidth:1,
    borderRadius:5,
  },

  buttonText: {
    color:"black",
    fontSize:18,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:5,
    paddingBottom:5,
    textAlign:'center',
  },

  buttonContainer: {
    marginTop:15,
    justifyContent:'center',
    alignItems:'center',
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
    marginTop:5,
  },

  label: {
    color:'black',
    marginLeft: "10%",
    marginTop:10,
    fontSize: 18,
  },


  label2: {
    color:'black',
    marginTop:300,
    fontSize: 18,
  },

  input: {
    borderWidth:2,
    borderColor:'#000000',
    borderRadius: 15,
    textAlign:'center',
    marginLeft:5,
    width:"20%",
    height:42,
    marginTop:300,
  },


  timeContainer: {
    flexDirection:"row",
    alignItems:"center",
    alignContent:"center",
    marginTop:15,
    marginBottom: 5,
    marginLeft: "10%"
  },

  center: {
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
  },

});

export default HomeScreen;
