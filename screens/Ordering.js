import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { TextInput, Button } from 'react-native';
import Card from '../components/Card';

export default class Ordering extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <>
        <Header title='Your almost finished!' />
        <View style={styles.container}>
          <Card style={styles.container}>
            <Text>Chef Name: <Text style={styles.bold}>{this.props.navigation.state.params.name}</Text></Text>
            <Text>Items Subtotal: <Text style={styles.bold}>{this.props.navigation.state.params.price + 1}</Text>($1 delivery fee)</Text>
            <Text>Product: <Text style={styles.bold}>{this.props.navigation.state.params.itemName}</Text></Text>
            <View style={styles.delivery}>
              <Text>Delivery: <Text style={styles.bold}>ASAP (35-45 min)</Text></Text>
              <Button style={{flex:2}} title="Change"/>
            </View>
            <Button style={styles.button} title="Add more items from Chef" />
            <Button style={styles.button} onPress={() => this.props.navigation.navigate('Checkout')} title="Contine to checkout" />


          </Card>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  button: {
    margin:10,
    padding:10
  },
  bold: {
    fontWeight: 'bold'
  },
  deliveryContainer: {
    flexDirection:'row'
  }
})