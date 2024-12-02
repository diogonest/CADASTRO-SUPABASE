import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';


export default function MainPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SEJA BEM VINDO</Text>
      <Text style={styles.subtitle}>My Desk 2025</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#345653',
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ebd3c1',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle:{
    fontSize: 25,
    fontWeight: 'Regular',
    color: '#ebd3c1',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    width: 300,
    height: 150, // Altura fixa para todos os cards
    backgroundColor: '#D8E7F4',
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
    elevation: 5,
    justifyContent: 'space-between', // Distribui os elementos uniformemente
  },
  groupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  groupImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  groupName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4E387E',
  },
  groupDescription: {
    fontSize: 14,
    color: '#4E387E',
  },
  groupAvaliacao: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20,
    color: '#4E387E',
  },
  viewInfo: {
    fontSize: 14,
    color: '#4E387E',
  },
  button: {
    backgroundColor: "#B1A5D0",
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  buttonText: {
    color: "#4E387E",
    fontSize: 16,
    fontWeight: "bold",
  },
  listContainer: {
    alignItems: 'center',
  },
});
