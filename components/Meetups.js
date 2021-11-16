import React from 'react';
import {View, Text, StyleSheet,Image,SafeAreaView,ScrollView, TextInput, Button, Alert, TouchableOpacity, CheckBox } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Header from './Header.js';
import RadioGroup from 'react-native-radio-buttons-group';
import {useState} from "react";
import MapView from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Footer from './Footer.js';
import { Dimensions } from 'react-native';




const Meetups = ( {navigation} ) => {


  return (
    <View styles={styles.container}>
      <SafeAreaView>
      <View style={styles.flexWrapper}>
        <View>
          <Header/>

          <View style={styles.center}>
            <Text style={styles.mainText}>
              Meetups Happening Today
            </Text>
          </View>

          <ScrollView style={styles.requestContainer}
            contentContainerStyle={styles.requestContainerContent}>

            <TouchableOpacity
              onPress={() => navigation.navigate('Meetup1')}>
              <View style={styles.requestItem}>
                <Text style={styles.name}>Gabriella Mcdowell</Text>
                <Text style={styles.place}>Wants to eat at Five Guys</Text>
                <Text style={styles.info}>21 - Female</Text>
                <Text style={styles.contact}>Contact Info Hidden</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Meetup2')}>
              <View style={styles.requestItem}>
                <Text style={styles.name}>Josh Hale</Text>
                <Text style={styles.place}>Wants to eat at Raising Canes</Text>
                <Text style={styles.info}>23 - Male</Text>
                <Text style={styles.contact}>Contact Info Hidden</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Meetup3')}>
              <View style={styles.requestItem}>
                <Text style={styles.name}>Arabella Burgess</Text>
                <Text style={styles.place}>Wants to eat at Subway</Text>
                <Text style={styles.info}>24 - Female</Text>
                <Text style={styles.contact}>Contact Info Hidden</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Meetup4')}>
              <View style={styles.requestItem}>
                <Text style={styles.name}>Carla Powell</Text>
                <Text style={styles.place}>Wants to eat at Chick-fil-a</Text>
                <Text style={styles.info}>21 - Female</Text>
                <Text style={styles.contact}>Contact Info Hidden</Text>
              </View>
            </TouchableOpacity>

          </ScrollView>

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

  requestContainer: {
    height: '65%',
     width: '80%',
     margin: 20,
     alignSelf: 'center',
     paddingTop:0,
     borderWidth: 1,
     borderRadius: 5,
     borderColor: '#FF914D',
     textAlign:"center",
  },

  requestItem:{
    fontColor:"black",
    margin:12,
    width:"80%",
    textAlign:"center"
  },

  requestContainerContent: {
    paddingBottom:15,
    marginLeft:"10%",
    textAlign:"center"

  },

  flexWrapper: {
  height: "100%",
  flexDirection: "column",
  justifyContent: "space-between",
  },

  name: {
    fontSize:23,
    color:"black",
    textAlign:"center"

  },

  place: {
    fontSize:17,
    textAlign:"center"

  },

  info: {
    fontSize:17,
    color:"black",
    textAlign:"center"

  },

  contact: {
    fontSize:17,
    color:"black",
    textAlign:"center"

  },

  mainText: {
    fontSize:26,
    textAlign:'center',
    marginTop:25,
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

  label: {
    color:'black',
    marginLeft: "10%",
    marginTop:0,
    fontSize: 18,
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

export default Meetups;
