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

          <View style={styles.searchContainer}>
            <GooglePlacesAutocomplete
              placeholder='Search'
              fetchDetails={true}
              style={styles.search}
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log("BeenPressed");
                displayMap();
              }}
              query={{
                key: 'AIzaSyDKOJs8dJeNcV4SLsOzaZufE0FmlB0Mreo',
                language: 'en',
              }}
            />
        </View>

  <View style={styles.mapContainer}>
    <MapView
      initialRegion={{
        latitude: 40.233845,
        longitude: -111.658531,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={styles.map}
      onPoiClick={e => console.log(e.nativeEvent)}
    />
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

      <View style={styles.footer}>
        <Footer/>
      </View>


      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({

  search: {
    width:"100%"
  },

  searchContainer: {
    height:"40%",
    width:"95%",
    zIndex:10,
    marginTop:10,
    marginLeft:"2%",
    marginRight:"2%",
    },

  map:{
    height:"100%",
    width: "100%",
  },

  mapContainer:{
    height:"40%",
    width:'100%',
    zIndex:2,
    marginTop:10,
    marginBottom:0,
    display:"none"
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

});

function displayMap()
{
  styles.mapContainer={display:"block"}
}

export default HomeScreen;
