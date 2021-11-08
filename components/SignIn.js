import React from 'react';
import {View, Text, StyleSheet,Image,SafeAreaView, TextInput, Button, Alert, TouchableOpacity } from 'react-native';



const SignIn = (props) => {
    const [emailText, emailChange] = React.useState(null);
    const [passwordText, passwordChange] = React.useState(null);

    function signUpButtonPressed() {
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
      }
    }

  return (
    <View>
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

      <TouchableOpacity
        style={styles.button} onPress={ signUpButtonPressed }>
          <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.label2}> Not yet a member? Sign up now! </Text>

      <TouchableOpacity
        style={styles.button2} onPress={() => Alert.alert('Sign Up button pressed')}>
          <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

    </View>
  )
}





const styles = StyleSheet.create({

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

  label2: {
    color:'black',
    marginLeft: 41,
    marginTop:35,
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

  button2: {
    marginLeft:120,
    marginTop:10,
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
  }

});

export default SignIn;
