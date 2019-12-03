import React from 'react';
import { View, Text, TextInput, PasswordInput, Button } from 'react-native';


export default function SignIn(props) {
  const [Username, onChangeUsername] = React.useState('Username');
  const [Password, onChangePassword] = React.useState('password');
  return (

    <>
      <View style={{marginTop:50, alignContent:'center', alignItems:'center'}}> 
        <Text style={{alignItems:'center'}}> Welcome to feedme</Text>
      </View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop:100 }}
        onChangeText={text => onChangeUsername(text)}
        value={Username}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop:100 }}
        onChangeText={text => onChangePassword(text)}
        value={Password}
        secureTextEntry={true}
      />
      <Button title='Sign in' onPress={props.signIn} />
    </>
  )
}