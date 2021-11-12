import React from 'react';
import {View, Text, StyleSheet,Image,SafeAreaView, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

const Footer = ( {navigation} ) => {



  return (
    <View styles={styles.container}>
      <SafeAreaView>



          <View style={styles.footerContainer}>

            <Image
            source={require('../assets/homeIcon.png')}
            style={styles.headerImage}
            />

            <Image
            source={require('../assets/plate-icon-fork-plate-and-fork-icon-11553392514ghe5jssldo.png')}
            style={styles.headerImage2}
            />

            <Image
            source={require('../assets/person.png')}
            style={styles.headerImage}
            />
          </View>


      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
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

export default Footer;
