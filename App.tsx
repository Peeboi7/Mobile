/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { View, StyleSheet, Text, StatusBar, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Home from './src/views/Home';
import Login from './src/views/Login';
import crashlytics from '@react-native-firebase/crashlytics';

class App extends React.Component {
  state = {
    hasUser: null
  }
  async componentDidMount() {
    crashlytics().log('App mounted');
    const hasUser = Boolean(await AsyncStorage.getItem('@hasUser') || "false");
    this.setState({ hasUser });
  }

  login = () => {
    AsyncStorage.setItem('@hasUser', String(true));
    this.setState({ hasUser: true })
  }

  logout = () => {
    AsyncStorage.setItem('@hasUser', String(false));
    this.setState({ hasUser: false })
  }

  render() {
    const { hasUser } = this.state;
    if (hasUser === null) {
      return <View style={styles.container}>
        <Text> Loading... </Text>
      </View>
    }
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          {!hasUser && <Login login={this.login} />}
          {hasUser && <Home logout={this.logout} />}
        </View>
        <View style={styles.container}>
          <Button title="Test Crash" onPress={() => crashlytics().crash()}></Button>

        </View>
      </>
    );
  };

}//App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: 'blue'
  }

});
export default App;
