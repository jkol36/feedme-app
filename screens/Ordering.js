import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';


const ScanCard = props => {
  return (
    <View> 
      <Text> Scan Card</Text>
    </View>

  )
}

export default class Ordering extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <Header title='Your almost finsihed!'></Header>
        
      </>
    )
  }
}