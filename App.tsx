import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Home} from "./src/views/home";

export default function App() {
    return (
      <View style={styles.app}>
          <View style={styles.header}> Header </View>
          <ScrollView>
              <View style={styles.container}>
                  <Home/>
                  <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
                  <StatusBar style="auto"/>
              </View>
          </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
    app: {
        fontFamily: 'sans-serif',
        flex: 1,
        flexDirection: "column"
    },
    container: {
        flex: 1,
        backgroundColor: '#100',
        color: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fafafa',
    },
    header: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#2A3550',
        textAlign: "center",
        color: '#fafafa',
        fontWeight: "bold",
        fontSize: 18
    }
});
