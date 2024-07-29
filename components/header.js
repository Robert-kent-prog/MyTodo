import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function Header(){

    return(
        <View style={styles.header}>
                <Text style={styles.todo}>
                        My Todos
                </Text>
        </View>
    );
}

const styles= StyleSheet.create({
    header:{
        height:60,
        backgroundColor:'orange',
        marginTop:20
    },
    todo:{
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color:'white',
        padding:14
    }
});