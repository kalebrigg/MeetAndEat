import React from 'react';
import {View, Text, StyleSheet,Image,SafeAreaView, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

import SignIn from './SignIn.js';

const Bootup = ( {navigation} ) => {

  const [emailText, emailChange] = React.useState(null);
  const [passwordText, passwordChange] = React.useState(null);

  function signInButtonPressed() {
    // Alert.alert('Sign In button pressed');
    if (emailText == null || passwordText == null)
    {
      Alert.alert('Please enter your email and password');
    }
    if (emailText == "" || passwordText == "")
    {
      Alert.alert('Please enter your email and password');
    }

    if (emailText == 'kaleb@gmail.com' && passwordText == 'password')
    {
      Alert.alert('Sign In Accepted');
      navigation.navigate('HomeScreen')
    }
  }

  return (
    <View styles={styles.container}>
      <SafeAreaView>

        <View styles={styles.center}>
          <Image
          source={require('../assets/mainLogo3.png')}
          style={styles.mainImage}
          />
        </View>

        <View style={styles.center}>
          <Image
          source={require('../assets/Meet.png')}
          style={styles.imageTitle}
          />
        </View>


          <Text style={styles.label}> Email: </Text>
        <View style={styles.center}>
          <TextInput
          placeholder="Enter your email"
          style={styles.input}
          onChangeText={emailChange}
          value={emailText}
          />
        </View>


          <Text style={styles.label}> Password: </Text>
        <View style={styles.center}>
          <TextInput
            style={styles.input}
            onChangeText={passwordChange}
            value={passwordText}
            placeholder="Enter your password"
          />
        </View>

        <View style={styles.center}>
          <TouchableOpacity
            style={styles.button} onPress={ signInButtonPressed }>
              <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.center}>
          <Text style={styles.label2}> Not yet a member? Sign up now! </Text>

          <TouchableOpacity
            style={styles.button2} onPress={() => navigation.navigate('SignUpProfile')}>
              <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#FFE4B0',
  },


  mainImage: {
    height: 160,
    width:"40%",
    marginTop:30,
    marginBottom:10,
    marginLeft:"30%",
    resizeMode: 'contain'
  },

  imageTitle: {
    height:82,
    width:310,
  },

  imageContainer: {
    justifyContent:'center',
    alignItems:'center',
  },

  input: {
    borderWidth:2,
    borderColor:'#000000',
    borderRadius: 15,
    textAlign:'center',
    width:"80%",
    height:42,
    backgroundColor:"white"
  },

  label: {
    color:'black',
    marginLeft: "10%",
    marginTop:20,
    fontSize: 20,

  },

  label2: {
    color:'black',
    marginTop:35,
    fontSize: 20,

  },

  button: {
    marginTop:25,
    flexDirection: 'row',
    justifyContent:'center',
    backgroundColor:"white",
    borderColor:"#000000",
    borderWidth:1,
    borderRadius:5,
    width:"33%",
  },

  button2: {
    marginTop:15,
    flexDirection: 'row',
    justifyContent:'center',
    backgroundColor:"white",
    borderColor:"#000000",
    borderWidth:1,
    borderRadius:5,
    width:"33%",
  },

  buttonText: {
    color:"black",
    fontSize:20,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:5,
    paddingBottom:5,
    textAlign:'center',
  },

  container2: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  center: {
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
  }

});

export default Bootup;
