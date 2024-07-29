import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({item, pressHandler}){

    return(
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name='delete' size={20} />
            <Text style={styles.mytext}>{item.task}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderStyle:'dashed',
        borderRadius:20,
        backgroundColor:'#d6cece',
        borderColor: '#bbb',
        borderWidth:1,
        flexDirection: 'row'
    },
    mytext:{
        fontSize:18,
        paddingLeft:10

    }

})