import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function BlogCard() {
  return (<>
    <View>
      <Text style={styles.textHeading}>Blog Card</Text>
    </View>
    <View style={[styles.card, styles.elevatedCard]}>
      <View style={styles.headingContainer}>
        <Text>What;s new in js ?</Text>
      </View>

      <View>
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBtXfSWELbmlykKhaYR_whC0jnJ28o86X8bQ&s' }} style={styles.cardImage}></Image>
      </View>

      <View style={styles.cardBody}>
        <Text numberOfLines={2}>JavaScript References. W3Schools maintains a complete JavaScript reference, including all HTML and browser objects. The reference contains examples for all ...
        </Text>
      </View>

      <View style={styles.cardFooter} >
        <TouchableOpacity>
          <Text style={styles.SocialLink}>Read More</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.SocialLink}>Follow Me</Text>
        </TouchableOpacity>

      </View>


    </View>
  </>
  )
}

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10
  },
  card: {},
  elevatedCard: {},
  headingContainer: {},
  cardImage: {
    height: 160,
    width: 100,
  },
  cardBody: {},
  cardFooter: {},
  SocialLink: {},







})