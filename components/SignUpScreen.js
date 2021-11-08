import React from 'react';
import {View, Text, StyleSheet,Image,SafeAreaView, TextInput, Button, Alert, TouchableOpacity, CheckBox } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Header from './Header.js';


const SignUpScreen = () => {

  const [emailText, emailChange] = React.useState(null);
  const [passwordText, passwordChange] = React.useState(null);
  const [confirmPasswordText, confirmChange] = React.useState(null);
  var isChecked = false;

  function signUpButtonPressed() {
    // Alert.alert('Sign In button pressed');
    if (emailText == null || passwordText == null || confirmPasswordText == null)
    {
      Alert.alert('Please enter your email and password');
      return;
    }
    if (emailText == "" || passwordText == "" || confirmPasswordText == null)
    {
      Alert.alert('Please enter your email and password');
      return;
    }
    if (passwordText != confirmPasswordText)
    {
      Alert.alert("Password's dont match");
      return;
    }
    if (isChecked==false) {
      Alert.alert("Please accept our Terms and Conditions before continuing");
      return;
    }
    else if (emailText == 'kaleb@gmail.com' && passwordText == 'password' && isChecked )
    {
      Alert.alert('Sign Up Accepted');
      return;
    }
  }

  function toggleChecked() {
    isChecked = !isChecked;
  }

  return (
    <View styles={styles.container}>
      <SafeAreaView>

        <Header/>

        <Text style={styles.mainText}>
          Sign up now to start eating with new friends!
        </Text>

        <Text style={styles.label}> Email: </Text>
        <TextInput
        placeholder="Enter your email"
        style={styles.input}
        onChangeText={emailChange}
        value={emailText}
        />

        <Text style={styles.label}> Password: </Text>
        <TextInput
          style={styles.input}
          onChangeText={passwordChange}
          value={passwordText}
          placeholder="Enter your password"
        />

        <Text style={styles.label}> Confirm Password: </Text>
        <TextInput
          style={styles.input}
          onChangeText={confirmChange}
          value={confirmPasswordText}
          placeholder="Enter your password"
        />

          <BouncyCheckbox
            fillColor="green"
            textColor="black"
            text="Accept our Terms & Conditions"
            textStyle={styles.bouncyTextStyle}
            style={styles.bouncyStyle}
            onPress={toggleChecked}
          />


        <TouchableOpacity
          style={styles.button} onPress={ signUpButtonPressed }>
            <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({

  mainText: {
    marginLeft:25,
    marginTop:35,
    fontSize:28,
    textAlign:'center',
    width:324,
    color: 'black',
  },

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

  input: {
    borderWidth:2,
    borderColor:'#000000',
    borderRadius: 15,
    textAlign:'center',
    marginLeft:31,
    width:317,
    height:42,
  },

  label: {
    color:'black',
    marginLeft: 30,
    marginTop:20,
    fontSize: 20,

  },

  button: {
    marginLeft:120,
    marginTop:25,
    flexDirection: 'row',
    justifyContent:'center',
    backgroundColor:"white",
    borderColor:"#000000",
    borderWidth:1,
    borderRadius:5,
    width:135,
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

  bouncyTextStyle: {
    textDecorationLine: "none",
    color: "black",
  },

  bouncyStyle: {
    marginLeft:40,
    marginTop:20,
    marginBottom:60,
  }


});

export default SignUpScreen;
