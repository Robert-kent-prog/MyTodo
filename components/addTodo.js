import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    const addTodoHandler = () => {
        submitHandler(text);
        setText('');
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='create todos...'
                onChangeText={changeHandler}
                value={text} // Bind the text input to the text state
            />
            <TouchableOpacity style={styles.button} onPress={addTodoHandler}>
                <Text style={styles.buttonText}>Add Todo</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    input: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'green',
        paddingHorizontal: 8,
        paddingVertical: 6,
        height: 50,
        fontSize: 18,
        paddingLeft:20,
        marginBottom: 20
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignItems: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
      },
})
