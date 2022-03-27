import {StyleSheet, View} from 'react-native';
import React from 'react';
import CarsList from './Components/CarsList';
import Header from './Components/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
