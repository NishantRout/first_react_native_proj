import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'shaun', id: '1' },
    { name: 'yoshi', id: '2' },
    { name: 'bruce', id: '3' },
    { name: 'steve', id: '4' },
    { name: 'tony', id: '5' },
    { name: 'harry', id: '6' },
    { name: 'clint', id: '7' },
    { name: 'wanda', id: '8' },
    { name: 'logan', id: '9' },
  ])

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return (
        prevPeople.filter(person => person.id != id)
      )
    });
  }

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}> {item.name} </Text>
          </TouchableOpacity>
        )}
      />
      {/* <ScrollView>
        {people.map(person => (
          <View key={person.key}>
            <Text style={styles.item}> {person.name} </Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: '#de5145',
    fontSize: 24,
  }
});
