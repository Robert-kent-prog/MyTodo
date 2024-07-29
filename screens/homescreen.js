import React from 'react'
import { StyleSheet, Text, View,} from 'react-native';

export default function HomeScreen() {
  return (

    <View style={styles.container}>
        <Text style={styles.buttonOne}>ButtonOne</Text>
        <Text style={styles.buttonTwo}>ButtonTwo</Text>
        <Text style={styles.buttonThree}>ButtonThree</Text>
        <Text style={styles.buttonFour}>ButtonFour</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        // flex:1,
        flexDirection: 'row',  // row makes the elements in the flex to take all the available space in the row direction while column is vice versa
        justifyContent: 'center', //determines how the different elements should be spread out in the flexbox
        alignItems: 'stretch',
        backgroundColor: '#7770',
        paddingTop: 40
    },
    buttonOne:{
        // flex:1,
        backgroundColor: "red",
        padding:13,
        borderRadius:10,
    },
    buttonTwo:{
        // flex:1,
        backgroundColor: 'pink',
        padding:13,
        borderRadius:10
    },
    buttonThree:{
        // flex:1,
        backgroundColor: 'yellow',
        padding:13,
        borderRadius:10
    },
    buttonFour:{
        // flex:1,
        backgroundColor: 'purple',
        padding:13,
        borderRadius:10
    }

})
