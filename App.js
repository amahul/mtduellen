import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NativeRouter, Switch, Route} from 'react-router-native';

import Home from './src/components/Home';
import TapTheButton from './src/components/TapTheButton';

class App extends Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Tap" component={TapTheButton} />
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
