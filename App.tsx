import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Home} from "./src/views/home";

export default function App() {
  return (
    <View style={styles.app}>
      <StatusBar style='light'/>
      <View style={styles.header}><Text style={styles.headerText}>header</Text></View>
      <ScrollView>
        <View style={styles.container}>
          <Home/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#222',
    height: '100%',
    borderBottomWidth: 30,
    borderColor: 'red'
  },
  container: {
    color: 'red',
    justifyContent: 'center',
  },
  text: {
    color: '#fafafa',
  },
  header: {
    paddingTop: 48  ,
    paddingBottom: 10,
    backgroundColor: '#2A3550',
  },
  headerText: {
    textAlign: "center",
    color: '#fafafa',
    fontWeight: "bold",
    fontSize: 18
  }
});
