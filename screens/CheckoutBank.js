import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PlaidAuthenticator from 'react-native-plaid-link';



export default class CheckoutBank extends Component {
  constructor(props) {
    super(props)
    this.onClose = this.onClose.bind(this);
    this.onPaymentSuccess = this.onPaymentSuccess.bind(this);
    this.onMessage = this.onMessage.bind(this);
  }
  onClose = () => {
    console.log('should close')
  }
  onPaymentSuccess = () => {
    console.log('on payment success')
  }
  onMessage = () => {
    console.log('on message')
  }
  render() {
    return (
      <PlaidAuthenticator
        onMessage={this.onMessage}
        publicKey="d2f6ba4c742f0474cf730ada8c6e57"
        env="sandbox"
        product="auth,transactions"
        clientName="Feedme"
        selectAccount={false}
      />
    )

  }
}