//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, FlatList, Alert } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todolist';
import AddTodo from './components/addTodo';
import HomeScreen from './screens/homescreen';

export default function App() {
  const [todos, setTodos] = useState([// array object for storing todo tasks
    { task: 'Code Javascript.', key: 1 },
    { task: 'Visit play Station.', key: 2 },
    { task: 'Study React-Native framework', key: 3 },
    { task: 'Take my Jeep Car to carwash.', key: 4 },
    { task: 'The CiSco certification.', key: 5 },
    { task: 'installation of laptop games.', key: 6 },
  ]);

  const [nextKey, setNextKey] = useState(7); // Start the next key after the last initial one

  const pressHandler = (key) => {// this function handles the deletion of a todo by passing their keys when the todo is clicked 
    setTodos((prevTodos) => {
      return prevTodos.filter(todos => todos.key != key)
    });
  }
  const submitHandler = (task) => {
    if (task.length > 4) {
      setTodos((prevTodos) => {
        const newTodo = { task: task, key: nextKey };
        setNextKey(nextKey + 1); // Increment the key for the next todo
        return [newTodo, ...prevTodos];
      });
    } else {

      Alert.alert('OOPS!!', 'Todos Must be greater than 4 Chars.',//diplaying alerts when the characters are not enough
        [{ text: 'Understood?', onPress: () => { } }]
      )
    }

  }
  return (
    //<HomeScreen/>
    <TouchableWithoutFeedback
      onPress={() =>
        Keyboard.dismiss()//to release the keyboard if the user clicks on the touchable without feedback area
      }
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.form}>
          <AddTodo submitHandler={submitHandler} />
        </View>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler}
                keyExtractor={item => item.key} // Explicitly specifying keyExtractor
              /> //passing the item and pressHandler props to 
              //the TodoItem function in the todolists.js file 
            )}
          />
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7773',
    marginLeft: 6,
    marginRight: 6
  },
  form: {
    marginBottom: 20,
    padding: 20,
   // flex: 1,
  },
  list: {
    margin: 6,
    flex: 1
  }

});



