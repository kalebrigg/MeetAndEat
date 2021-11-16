import React from 'react';
import {View, Text, StyleSheet,Image,SafeAreaView, TextInput, Button, Alert, TouchableOpacity, CheckBox } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Header from './Header.js';
import RadioGroup from 'react-native-radio-buttons-group';
import {useState} from "react";
import MapView from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Footer from './Footer.js';
import { Dimensions } from 'react-native';




const HomeScreen = ( {navigation} ) => {


  const [mapShow, toggleMap] = useState("none");
  const [height, toggleHeight]= useState("40%");
  const [width, toggleWidth]= useState("95%");

  const [latitude, updateLat]= useState(0);
  const [longitude, updateLng]= useState(0);
  const [title, updateTitle]= useState("");
  const [address, updateAdress]= useState("");
  const [hours, updateHours]= useState("");


  function rerender () {
    toggleHeight("40%");
    toggleMap("none");
  }


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

  function submitMeetup() {
    Alert.alert("Your meetup has been created!");
     navigation.navigate('Bootup')
  }

  let autoDisplay = "flex"

  function disableAuto() {
    autoDisplay = "none"
    console.log("Tried to Change");
  }

  function getVal(num) {
    if (num == 0)
    { return 6;}
    if (num == 1)
    { return 0;}
    else {
      return num;
    }
  }

  return (
    <View styles={styles.container}>
      <SafeAreaView>
      <View style={styles.flexWrapper}>
          <View>
              <Header/>
              <View style={styles.buttonContainer}>
                <Text style={styles.mainText}>
                  Create a new meetup now!
                </Text>
              </View>

                  <View style={{
                    height:"32%",
                    width:"95%",
                    zIndex:10,
                    marginTop:10,
                    marginLeft:"2.5%",
                    marginRight:"2.5%",
                  }}>
                    <GooglePlacesAutocomplete
                      placeholder='Search'
                      fetchDetails={true}
                      style={styles.search}
                      onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        updateTitle("Eating at " + details.name);
                        updateAdress(details.formatted_address);
                        var d = new Date();
                        var date = d.getDay();
                        console.log(details.opening_hours.weekday_text[getVal(date)]);
                        updateHours(details.opening_hours.weekday_text[getVal(date)]);
                        toggleMap("flex");
                      }}
                      query={{
                        key: 'AIzaSyDKOJs8dJeNcV4SLsOzaZufE0FmlB0Mreo',
                        language: 'en',
                      }}
                    />
                </View>

          <View style={styles.center}>
              <Text style={styles.data}>  {title} </Text>
              <Text style={styles.data1}> {address} </Text>
              <Text style={styles.data1}> {hours} </Text>
          </View>







              <View style={styles.timeContainer}>
                <Text style={styles.label2}> Time: </Text>
                <TextInput
                placeholder="2:30"
                style={styles.input}
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
                  style={styles.button2} onPress={submitMeetup}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </View>
          </View>
          <View>
              <View style={styles.footerContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Bootup')}>
                  <Image
                  source={require('../assets/homeIcon.png')}
                  style={styles.headerImage}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('Bootup')}>
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

  search: {
    width:"100%"
  },

  data: {
    fontSize:21,
    color:"black",
  },
  data1: {
    fontSize:18,
    color:"black",
    marginTop:5,
  },

  flexWrapper: {
  height: "100%",
  flexDirection: "column",
  justifyContent: "space-between",
  },


  searchContainer: {
    height:"40%",
    width:"95%",
    zIndex:10,
    marginTop:10,
    marginLeft:"2%",
    marginRight:"2%",
    display: "flex"
  },

  map:{
    height:"100%",
    width: "95%",
    marginLeft:"2%",
    marginRight:"2%",
  },

  mapContainer:{

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
    marginTop:10,
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
    marginTop:10,
    backgroundColor:"white",
  },


  timeContainer: {
    flexDirection:"row",
    alignItems:"center",
    alignContent:"center",
    marginTop:10,
    marginBottom: 5,
    marginLeft: "10%"
  },

  center: {
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
  },

  footer: {
    width: '100%',
    positon:"absolute",
    bottom:-13,
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
});

export default HomeScreen;
