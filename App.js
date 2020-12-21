import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder='Enter item'
          style={styles.textInput}
        />
        <Button
          title='add todo item'
          onPress={() => console.log('Button clicked')}
        />
      </View>
      <View>
        <Text>Todo List</Text>
      </View>
      </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60
  },

  textInput: {
    padding: 10,
    borderColor: '#000000',
    marginBottom: 10,
    borderWidth:1

  }
});
