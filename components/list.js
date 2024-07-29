import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity,ScrollView, TextInput } from 'react-native';

export default function App() {
  const [people, usePeople] = useState([
    { name: 'Robert', id: '1' },
    { name: 'Kent', id: '2' },
    { name: 'Jackline', id: '3' },
    { name: 'Joy', id: '4' },
    { name: 'Tess', id: '5' },
    { name: 'Patricia', id: '6' },
    { name: 'Joshua', id: '7' },
    { name: 'Caleb', id: '8' },
    { name: 'Mercy', id: '9' },
    { name: 'Frank', id: '10' },
    { name: 'Rhoda', id: '11' },
    { name: 'Elizabeth', id: '12' }
  ]);

  return (
    <View style={styles.container}>

      <View style={styles.welcome}>
        <Text>My application Frontend.</Text>
      </View>
      <FlatList
      //used to l;oop[ through the list object and if favourable if you haave large data stored in an list since it loads data the first few ones and loads the other as you scroll 
      //unlike the scrollview which loads all ythe data at the same time
        data={people}
        renderItem={({ item }) => (
          //the touchable opacity is used to add opacity toitems when they have been touched
          <TouchableOpacity>
          <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <ScrollView> //when using the scrollView you must import it from react
      {
        people.map((items) => (
          <View key={items.key}>
            <Text style={styles.item}>{items.name}</Text>
          </View>
        )
        )
      }
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7770',
    paddingTop: 40,
    paddingHorizontal: 20,
    //alignItems: 'center',
    //justifyContent: 'center',
    // marginBottom: 40,
    //marginTop:0,
  },
  item: {
    backgroundColor: 'pink',
    marginTop: 24,
    padding: 40,
    fontSize: 24,
    borderRadius: 8,
    fontWeight: 'bold',
  },
  welcome: {
    backgroundColor: '#0797',
    fontWeight: 600,
    //alignItems : 'center', 
    borderRadius:12,
    fontSize:10,
    padding:10,
    color:'black',
    marginBottom: 20,
    height:50
  },
});



