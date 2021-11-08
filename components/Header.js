import React from 'react';
import {View, Text, StyleSheet,Image,SafeAreaView, TextInput, Button, Alert, TouchableOpacity, CheckBox } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";


const Header = () => {

  return (
    <View styles={styles.container}>
      <SafeAreaView>

        <View style={styles.headerContainer}>
          <Image
          source={require('../assets/mainLogo3.png')}
          style={styles.headerImage2}
          />

          <Image
          source={require('../assets/headerImage.png')}
          style={styles.headerImage}
          />
        </View>

      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({

  headerContainer: {
    flexDirection: 'row',
    marginTop:2,
    backgroundColor:"white",
  },

  headerImage2: {
    height:56,
    width:71,
    resizeMode:'contain',
    marginLeft:5,
    marginTop:5,
  },

  headerImage: {
    height:53,
    width:257,
    marginTop:7,
  },

});

export default Header;
