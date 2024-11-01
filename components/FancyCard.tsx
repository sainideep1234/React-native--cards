import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.textHeading}>Trending Places</Text>
      <View style={[styles.card, styles.elevated]}>
        <Image source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ6OlLDmL3pFskt7HHVynqEPiT44AhQ8Xc6A&s'
        }} style={styles.imageStyle}></Image>
        <View style={styles.cardbody}>
          <Text style={styles.cardTitle}>JAIPUR</Text>
          <Text style={styles.cardCity}>Pink , City</Text>
          <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur,</Text>
          <Text style={styles.cardABout}>12 mins away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 10
  },
  card: {
    // height:300,
    // width:360,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginHorizontal:20,
    marginVertical:20,

  },
  elevated: {
    backgroundColor:'#ffffff',
    elevation:3,
    shadowOffset:{
      height:1,
      width:1
    },
    shadowColor:'grey',
  },
  imageStyle: {
    height: 300,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  cardbody: {
    flex:1,
    flexGrow:1,
    // marginTop: 10,
    // marginBottom: 10,
    // paddingLeft: 10,
    padding:10

  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000'

  },
  cardCity: {
    marginBottom: 10,
    color: '#000000'

  },
  cardDescription: {
    marginBottom: 10,
    color: '#000000',
    flexShrink:1
  },
  cardABout: {
    color: '#000000'
  },



})