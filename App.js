/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Bootup from './components/Bootup.js';
import SignUpScreen from './components/SignUpScreen.js';
import SignUpProfile from './components/SignUpProfile.js';
import Footer from './components/Footer.js';
import Profile from './components/Profile.js';
import HomeScreen from './components/HomeScreen.js';
import ModeOfContact from './components/ModeOfContact.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MeetupRequests from './components/MeetupRequests.js';
import PastRequests from './components/PastRequests.js';
import Meetups from './components/Meetups.js';
import Meetup1 from './components/Meetup1.js';
import Meetup2 from './components/Meetup2.js';
import Meetup3 from './components/Meetup3.js';
import Meetup4 from './components/Meetup4.js';
import Request1 from './components/Request1.js';
import Request2 from './components/Request2.js';
import Request3 from './components/Request3.js';
import Request4 from './components/Request4.js';





import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        contentStyle:{
          backgroundColor:'#FFE4B0'
        }
      }}>
        <Stack.Screen
          name="Bootup"
          component={Bootup}
          options={{
            headerShown:false,
          }}
        />
        <Stack.Screen
          name="SignUpProfile"
          component={SignUpProfile}
          options={{
            headerShown:false,
          }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            headerShown:false,
          }}
        />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown:false,
            }}
        />
        <Stack.Screen
          name="Footer"
          component={Footer}
          options={{
            headerShown:false,
          }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown:false,
        }}
    />
    <Stack.Screen
      name="ModeOfContact"
      component={ModeOfContact}
      options={{
        headerShown:false,
      }}
  />
  <Stack.Screen
    name="MeetupRequests"
    component={MeetupRequests}
    options={{
      headerShown:false,
    }}
/>
<Stack.Screen
  name="PastRequests"
  component={PastRequests}
  options={{
    headerShown:false,
  }}
/>
<Stack.Screen
  name="Meetups"
  component={Meetups}
  options={{
    headerShown:false,
  }}
/>
<Stack.Screen
  name="Meetup1"
  component={Meetup1}
  options={{
    headerShown:false,
  }}
/>
<Stack.Screen
  name="Meetup2"
  component={Meetup2}
  options={{
    headerShown:false,
  }}
/>
<Stack.Screen
  name="Meetup3"
  component={Meetup3}
  options={{
    headerShown:false,
  }}
/>
<Stack.Screen
  name="Meetup4"
  component={Meetup4}
  options={{
    headerShown:false,
  }}
/>
<Stack.Screen
  name="Request1"
  component={Request1}
  options={{
    headerShown:false,
  }}
/>
<Stack.Screen
  name="Request2"
  component={Request2}
  options={{
    headerShown:false,
  }}
/>
<Stack.Screen
  name="Request3"
  component={Request3}
  options={{
    headerShown:false,
  }}
/>
<Stack.Screen
  name="Request4"
  component={Request4}
  options={{
    headerShown:false,
  }}
/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
