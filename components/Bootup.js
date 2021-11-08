import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';

import SignIn from './SignIn.js';

const Bootup = () => {
  return (
    <View styles={styles.container}>
      <SafeAreaView>

        <View styles={styles.imageContainer}>
          <Image
          source={require('../assets/mainLogo3.png')}
          style={styles.mainImage}
          />

          <Image
          source={require('../assets/Meet.png')}
          style={styles.imageTitle}
          />
        </View>

        <SignIn/>

      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroungColor: '#fff',

  },


  mainImage: {
    height: 160,
    width:179,
    marginLeft:103,
    marginTop:30,
    marginBottom:10,
    resizeMode: 'contain'
  },

  imageTitle: {
    height:82,
    width:310,
    marginLeft: 36,
  }

});

export default Bootup;
