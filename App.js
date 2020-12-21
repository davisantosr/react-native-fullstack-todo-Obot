import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

import Header from './src/components/Header'

export default function App() {

  const [ todoItem, setTodoItem ] = useState('')
  const [ todoList, setTodoList ] = useState([])

  const addTodoList = () => {
    setTodoList([...todoList, todoItem])
    console.log(todoList);
  }


  return (
    <View>
      <Header title='Todo list'/>
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
        <ScrollView>
          {todoList.map(todo => {
            return (
              <View
                key={todo}
                style={styles.todoItem}
              >
                <Text>
                  {todo}
                </Text>
              </View>
            )
          })}
        </ScrollView>
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
  },
  todoItem: {
    marginTop:10,
    padding:20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray'
  }
});
