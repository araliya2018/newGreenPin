import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
//import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
      isVisible: false,
      name: '',
      displayName: '',
      confirmPassword: '',
    };
  }

  userLogin = (username, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        this.props.navigation.navigate('Home');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };

  userSignUp = (username, password, confirmPassword) => {
    if (password !== confirmPassword) {
      return Alert.alert("Password doesn't match.");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(username, password)
        .then((response) => {
          db.collection('users').add({
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            mobile_number: this.state.mobileNumber,
            username: this.state.username,
            address: this.state.address,
          });
          return Alert.alert('User Added Successfully', '', [
            { text: 'OK', onPress: () => this.setState({ isVisible: false }) },
          ]);
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
    }
  };

  
  render() {
    return (
      <View style={styles.container}>
         <View style={{marginTop:50, }}>
              <Text style={{ fontSize:25, marginRight:15, marginTop:10,marginl:200, color:'#4ca455' }}> 
                Skip
              </Text> 
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/logo.png')}
            style={{ width: 200, height: 300, marginLeft: 10, marginTop: 10 }}
          />
          </View>

          <View style={styles.buttonContainer}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              //fontWeight: 'bold',
             // marginLeft: 55,->please give valid props 
            }}>
            Username
          </Text>
         
            <TextInput
              style={styles.loginBox}
              keyboardType={'email-address'}
              //color="white"
              onChangeText={(text) => {
                this.setState({
                  username: text,
                });
              }}
            />
           
          </View>

          <View style={styles.buttonContainer}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              //fontWeight: 'bold',
             
            }}>
            Password
          </Text>
         
            <TextInput
              style={styles.loginBox}
              secureTextEntry={true}
              //color="white"
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
            />
           
          </View>
          <View style={{flex:1, alignItems: 'center' }}>
                    <TouchableOpacity
                      style={[styles.button, { marginBottom: 10 }]}
                      onPress={() => {
                        this.userLogin(this.state.username, this.state.password);
                      }}>
                      <Text
                        style={{ color: 'white', fontSize: 18,  }}>
                        LOGIN
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        this.setState({ isVisible: true });
                      }}>
                      <Text
                        style={{ color: 'white', fontSize: 18,  }}>
                        SIGN UP
                      </Text>
                    </TouchableOpacity>

                    </View>
          
              <View  style={{flex:0.5,marginLeft:110,marginBottom:50,alignItems:'center',justifyContent:'center'}}>
              <View style={{ marginRight:150, marginTop:10}}>
              <Image
                source={require('../assets/google2.png')}
                 // fadeDuration={0}
                  style={{ width: 50, height: 50, marginRight:0, marginTop:10 }}
              />
              </View>
              <View style={{ marginRight:-20, marginTop:-60, justifyContent:'center', alignItems:'center'}}> 
              <Image
                source={require('../assets/facebook.png')} 
                 // fadeDuration={0}
                  style={{ width: 50, height: 50, marginRight:20, marginTop:10 }}
              />
              </View>
             
              </View>

      </View>
    )}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#092f1c',
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:5
  },
  loginBox: {
    width: 300,
    height: 35,
    borderBottomWidth: 1.5,
    borderColor: 'green',
    

    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2d9345',
    marginRight: 30,
    marginLeft: 30,
    marginTop: 80,
    marginBottom: 80,
  },
})