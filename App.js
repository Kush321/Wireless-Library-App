import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './screens/searchScreen';
import BookTransactionScreen from './screens/bookTransactionScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

export default class App extends React.Component{
render(){
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}
}

const TabNavigator = createBottomTabNavigator({
  Transaction : {screen:BookTransactionScreen},
  Search : {screen:SearchScreen}
})

const AppContainer = createAppContainer(TabNavigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
