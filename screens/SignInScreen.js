import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Header from '../components/Header';


export default function SignIn(props) {
  const [Username, onChangeUsername] = React.useState('');
  const [Password, onChangePassword] = React.useState('');
  return (

    <>
      <Header style={styles.heading}> 
        <Text style={{alignItems:'center'}}> Welcome to feedme</Text>
      </Header>
      <Card>
        <TextInput
          onChangeText={text => onChangeUsername(text)}
          value={Username}
          underlineColorAndroid='transparent'
          placeholder="Enter your username"
          placeholderTextColor='black'
          style={styles.inputFields}
        />
      </Card>
      <Card>
        <TextInput
          onChangeText={text => onChangePassword(text)}
          value={Password}
          style={styles.inputFields}
          underlineColorAndroid='transparent'
          placeholder="Enter your password"
          placeholderTextColor='black'
          secureTextEntry={true}
        />
      </Card>
      
      <Button title='Sign in' style={styles.signinButton} onPress={props.onSignIn} />
    </>
  )
}

const styles = StyleSheet.create({
  heading: {
    marginTop:50,
    alignItems: 'center'
  },
  inputFields: {
    marginTop:50
  },
  signinButton: {
    padding:200
  }
  
})