import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [ todoItem, setTodoItem ] = useState('')
  const [ todoList, setTodoList ] = useState([])

  const addTodoList = () => {
    setTodoList([...todoList, todoItem])
    console.log(todoList);
  }


  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder='Enter item'
          style={styles.textInput}
          onChangeText={text => setTodoItem(text)}
          value={todoItem}
        />
        <Button
          title='add todo item'
          onPress={addTodoList}
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
