import React from 'react';
import {View, Text, StyleSheet,Image,SafeAreaView, TextInput, Button, Alert, TouchableOpacity, CheckBox } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Header from './Header.js';
import RadioGroup from 'react-native-radio-buttons-group';
import {useState} from "react";
import MapView from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Footer from './Footer.js';

const Request4 = ( {navigation} ) => {

  const radioButtonsData = [
  {
    id: '1',
    label: 'Call',
    value: 'option1',
    color: 'black',
    selected: false,
    disabled:true,
  },
  {
    id: '2',
    label: 'Text',
    value: 'option2',
    color: 'black',
    selected: false,
    disabled:true,
  },
  {
    id: '3',
    label: 'Social Media',
    value: 'option3',
    color: 'black',
    selected: true,
    disabled: false,
  },
];
const [shown, matchMade] = useState("none");

const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  const onPressRadioButton = radioButtonsArray => {
    console.log(radioButtonsArray);
    setRadioButtons(radioButtonsArray);
  };

function sendRequest() {
  Alert.alert('Meetup confirmed! Contact your new friend and enjoy your meal. :)');
  matchMade("flex");
}

  return (
    <View styles={styles.container}>
      <SafeAreaView>
        <View style={styles.flexWrapper}>
          <View>
              <Header/>

              <Text style={styles.mainText}>
              Josh Hale
              </Text>
              <Text style={styles.secondaryText}>
                {'Wants to eat at Chick-fil-a!\n23   -   Male'}
              </Text>

              <Text style={styles.label}>About Josh: </Text>

              <View style={styles.bioContainer} >
                <Text style={styles.bioText}>
                  Hi my name is Josh. I love Chick-fil-a and I'm excited to meet new friends.
                  I like playing sports, eating, and reading. I am a student at BYU.
                </Text>
              </View>

              <Text style={styles.label}> Prefered contact method: </Text>

              <View style={styles.radioContainer} >
                <RadioGroup
                  radioButtons={radioButtons}
                  onPress={onPressRadioButton}
                  layout="row"
                  style={styles.radio}
                />
              </View>

              <View style={styles.contactContainer} >
                <Text style={{
                  color:'black',
                  padding:5,
                  fontSize: 20,
                  textAlign:"center",
                  display: shown
                }}>
                    Snapchat: joshHale
                </Text>
              </View>
              <View style={styles.center}><Text style={styles.labelCont}>hidden until match is made</Text></View>

              <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.button} onPress={() => sendRequest()}>
                      <Text style={styles.buttonText}>Confirm Meetup!</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.button} onPress={() => navigation.navigate('MeetupRequests')}>
                      <Text style={styles.buttonText}>Go Back</Text>
                  </TouchableOpacity>
              </View>
          </View>
          <View>
              <View style={styles.footerContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('HomeScreen')}>
                  <Image
                  source={require('../assets/homeIcon.png')}
                  style={styles.headerImage}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('Meetups')}>
                  <Image
                  source={require('../assets/plate-icon-fork-plate-and-fork-icon-11553392514ghe5jssldo.png')}
                  style={styles.headerImage2}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('Profile')}>
                  <Image
                  source={require('../assets/person.png')}
                  style={styles.headerImage}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({

  mainText: {
    marginTop:25,
    fontSize:26,
    marginLeft:"10%",
    width:324,
    color: 'black',
  },

  flexWrapper: {
  height: "100%",
  flexDirection: "column",
  justifyContent: "space-between",
  },

  secondaryText: {
    marginTop:5,
    fontSize:20,
    marginLeft:"10%",
    width:324,
    color: 'black',
    marginBottom:10,
  },

  label: {
    color:'black',
    marginLeft: "10%",
    marginTop:10,
    fontSize: 20,
  },

  labelCont: {
    color:'black',
    marginBottom:15,
    fontSize: 13,
  },

  bioContainer: {
    backgroundColor:"white",
    borderWidth:2,
    borderColor:'#000000',
    borderRadius: 15,
    marginLeft:"10%",
    marginRight:"10%",
    marginTop:10,
    height:"25%",
  },

  bioText: {
    color:'black',
    padding:15,
    fontSize: 20,

  },

  contactText: {
    color:'black',
    padding:5,
    fontSize: 20,
    textAlign:"center"

  },

  contactContainer: {
    backgroundColor:"white",
    borderWidth:2,
    borderColor:'#000000',
    borderRadius: 15,
    marginLeft:"25%",
    marginRight:"25%",
    marginTop:15,
    height:'6.5%',
    width:"50%",
  },

  center: {
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
  },

  footerContainer: {
    flexDirection: 'row',
    backgroundColor:"white",
    justifyContent:"space-around",
  },

  headerImage2: {
    height:40,
    width:40,
    resizeMode:'contain',
    marginLeft:5,
    marginTop:5,
  },

  headerImage: {
    height:40,
    width:40,
    resizeMode:'contain',
    marginLeft:5,
    marginTop:5,
  },

  button: {
    marginTop:0,
    flexDirection: 'row',
    justifyContent:'center',
    backgroundColor:"white",
    borderColor:"#000000",
    borderWidth:1,
    borderRadius:5,
    width:"auto",
  },

  buttonText: {
    color:"black",
    fontSize:17,
    padding:10,
    textAlign:'center',
  },

  buttonContainer: {
    flexDirection:"row",
    justifyContent:"space-around",
    marginLeft:"5%",
    marginRight:"5%",
    marginTop:0,
    marginBottom:5
  },


  radio: {
    color:'black',
    fontColor: 'black'
  },

  radioContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color:"black",
  },

});

export default Request4;
