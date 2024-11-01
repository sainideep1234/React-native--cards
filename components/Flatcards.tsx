import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Flatcards() {
  return (
    <View>
      <Text style={styles.textHeading}>Flatcards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>blue</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10
  },
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 10

  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'green',
  },
  cardThree: {
    backgroundColor: 'blue',
  },
})