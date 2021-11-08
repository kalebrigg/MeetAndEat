import React from 'react';
import {View, Text, StyleSheet,Image,SafeAreaView, TextInput, Button, Alert, TouchableOpacity, CheckBox } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Header from './Header.js';

const SignUpProfile = () => {

  const [nameText, nameChange] = React.useState(null);
  const [ageText, ageChange] = React.useState(null);
  const [confirmPasswordText, confirmChange] = React.useState(null);
  var maleChecked = false;
  var femaleChecked = false;


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

  }

  return (
    <View styles={styles.container}>
      <SafeAreaView>

        <Header/>

        <Text style={styles.mainText}>
          Tell us a little about yourself!
        </Text>

        <Text style={styles.label}> Full Name: </Text>
        <TextInput
        placeholder="Enter your name"
        style={styles.input}
        onChangeText={nameChange}
        value={nameText}
        />

        <View style={styles.ageContainer}>
          <Text style={styles.ageText}> Age: </Text>
          <TextInput
            style={styles.ageInput}
            onChangeText={ageChange}
            value={ageText}
            keyboardType="numeric"
          />
        </View>

        <Text style={styles.label}> About You: </Text>
        <TextInput
        placeholder="Get Creative!"
        style={styles.inputBio}
        onChangeText={nameChange}
        value={nameText}
        />
        <Text style={styles.label}>
          This might include your hobbies or anything fun or unique about you!
        </Text>



        <TouchableOpacity
          style={styles.button} onPress={ signUpButtonPressed }>
            <Text style={styles.buttonText}>Finish</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({

  mainText: {
    marginLeft:25,
    marginTop:15,
    fontSize:26,
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

  inputBio: {
    borderWidth:2,
    borderColor:'#000000',
    borderRadius: 15,
    textAlign:'center',
    marginLeft:31,
    width:317,
    height:150,
  },

  label: {
    color:'black',
    marginLeft: 30,
    marginTop:10,
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
  },

  ageContainer: {
    flexDirection:"row",
    alignItems:"center",
    alignContent:"center",
    marginTop:15,
  },

  ageInput: {
    borderWidth:2,
    borderColor:'#000000',
    borderRadius: 15,
    textAlign:'center',
    marginLeft:5,
    width:50,
    height:42,
  },

  ageText: {
    color:'black',
    marginLeft: 30,
    fontSize: 20,

  },

});

export default SignUpProfile;
