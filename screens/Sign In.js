import React, {useState} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const generateRandomNumber = () => {
  const min = 100000;
  const max = 999999; 
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const handleGenerate = async (phoneNumber) => {
  const randomNumber = generateRandomNumber();
  const url = `http://172.21.128.181:3000/?message=Your%20verification%20code%20is%20${randomNumber}&number=91${phoneNumber}&subject=VERIFY`;
    const response = await fetch(url);
  
};


const SignInScreen = () => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const isPhoneNumberValid = phoneNumber.length === 10;

  return (
    <View style={styles.container}>
      {/* <Image source={require('../logo_transparent.png')} style={styles.logo} /> */}
      <View style={styles.container2}>
      <View style={{width: '100%', alignContent:'flex-start', paddingLeft: 40}}>
      <Text style={styles.title}>Sign Up</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <TouchableOpacity
        style={[styles.signInButton, !isPhoneNumberValid && styles.disabledButton]}
        onPress={() => isPhoneNumberValid && handleGenerate(phoneNumber)}
        disabled={!isPhoneNumberValid}
      >
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#80bbff',
  },
  container2: {
    width: '100%',
    flex: 1,
    // justifyContent: 'center',
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 200,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 10,
  },
  logo: {
    width: 400,
    height: 400,
    position: 'absolute',
    top :-50,
    left: -120,
    opacity: 0.2,
    // marginBottom: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  input: {
    width: '80%',
    height: 50,
    // borderWidth: 1,
    backgroundColor: '#e6f2ff',
    // borderColor: '#ccc',
    borderRadius: 27,
    paddingHorizontal: 17,
    marginBottom: 10,
  },
  forgotPasswordButton: {
    marginBottom: 10,
    marginRight: 40,
    // width: '100%',
    alignSelf: 'flex-end',
    // justifyContent: 'flex-end'
    // alignContent: 'flex-start',
  },
  forgotPasswordText: {
    color: 'black',
  },
  signInButton: {
    height: 50,
    backgroundColor: '#80bbff',
    paddingVertical: 10,
    borderRadius: 27,
    paddingHorizontal: 17,
    width: '80%',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  signInButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpButton: {
    marginBottom: 20,
  },
  signUpButtonText: {
    color: 'black',
    // fontSize: 16,
    // fontWeight: 'bold',
  },
});

export default SignInScreen;
