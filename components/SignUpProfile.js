import React from 'react';
import {View, Text, StyleSheet,Image,SafeAreaView, TextInput, Button, Alert, TouchableOpacity, CheckBox } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Header from './Header.js';
import RadioGroup from 'react-native-radio-buttons-group';
import {useState} from "react";
import ModeOfContact from './ModeOfContact.js';

const SignUpProfile = ( {navigation} ) => {

  const [nameText, nameChange] = React.useState(null);
  const [ageText, ageChange] = React.useState(null);
  const [confirmPasswordText, confirmChange] = React.useState(null);
  var maleChecked = false;
  var femaleChecked = false;

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
];

function finish() {
  Alert.alert("Welcome! You're ready to create your first Meetup!");
  navigation.navigate('HomeScreen')
}

const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  const onPressRadioButton = radioButtonsArray => {
    console.log(radioButtonsArray);
    setRadioButtons(radioButtonsArray);
  };

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

        <View style={styles.center}>
          <Text style={styles.mainText}>
            Tell us a little about yourself!
          </Text>
        </View>

        <Text style={styles.label}> Full Name: </Text>
        <TextInput
        placeholder="Enter your name"
        style={styles.input}
        onChangeText={nameChange}
        value={nameText}
        />
        <View style={styles.flexContainer}>
          <View style={styles.ageContainer}>
            <Text style={styles.ageText}> Age: </Text>
            <TextInput
              style={styles.ageInput}
              onChangeText={ageChange}
              value={ageText}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.radioContainer} >
            <RadioGroup
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
              layout="row"
              style={styles.radio}
            />
          </View>
        </View>

        <ModeOfContact/>

        <Text style={styles.label}> About You: </Text>
        <TextInput
        placeholder="Get Creative!"
        style={styles.inputBio}
        onChangeText={nameChange}
        value={nameText}
        />
        <View style={styles.center}>
          <TouchableOpacity
            style={styles.button} onPress={() => finish()}>
              <Text style={styles.buttonText}>Finish</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
  },

  flexContainer: {
    flexDirection:"row",
    marginBottom: 0,
  },

  mainText: {
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
    marginLeft:"10%",
    width:"80%",
    height:42,
    backgroundColor:"white",
  },

  inputBio: {
    borderWidth:2,
    borderColor:'#000000',
    borderRadius: 15,
    textAlign:'center',
    marginLeft:"10%",
    width:"80%",
    height:140,
    backgroundColor:'white',
  },

  label: {
    color:'black',
    marginLeft: "10%",
    marginTop:10,
    fontSize: 20,
  },

  label2: {
    color:'black',
    width:"80%",
    marginLeft:"5%",
    marginTop:10,
    fontSize: 20,
  },

  button: {
    marginTop:15,
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

  },

  ageContainer: {
    flexDirection:"row",
    alignItems:"center",
    alignContent:"center",
    marginTop:15,
    marginLeft: "10%"
  },

  ageInput: {
    borderWidth:2,
    borderColor:'#000000',
    borderRadius: 15,
    textAlign:'center',
    marginLeft:5,
    width:50,
    height:42,
    backgroundColor:'white',
    marginRight:10,
  },

  ageText: {
    color:'black',
    fontSize: 20,

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
    marginTop:15,
  },

  center: {
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
  },

});

export default SignUpProfile;
