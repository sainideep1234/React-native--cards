import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.textHeading}>ElevatedCards</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>this</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>is </Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>card</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>understand</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>no need to worry</Text>
        </View>
      </ScrollView>
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
  },
  card: {
    height: 100,
    width: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    borderRadius: 10
  },
  elevatedCard: {
    backgroundColor: 'grey',
    elevation: 4,
    shadowOffset: {
      height: 1,
      width: 1
    },
    shadowColor: 'white',


  }
})