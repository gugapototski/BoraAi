import { StatusBar, SafeAreaView, StyleSheet, Text } from 'react-native';
import Footer from "./Comps/Footer"
import React from 'react';
import PainelCarona from '../src/PainelCarona';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PainelCarona/>
      <Text>Pra por na tela tem q ta dentro to text</Text>
      <StatusBar style="auto" />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,/* 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', */
  },
});
