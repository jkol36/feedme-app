import * as React from 'react';
import { StyleSheet } from 'react-native';
import Routes from './routes'
import SignInScreen from './screens/SignInScreen';



export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    }
  }

  render() {
    if(this.state.authenticated) {
      return (
        <Routes />
      )
    }
    else {
      return (
        <SignInScreen signIn={() => this.setState({authenticated:true})} />
      )
    }
  }
}
