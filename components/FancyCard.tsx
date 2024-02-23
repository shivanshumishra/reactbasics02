import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'

export default class FancyCard extends Component {
  render() {
    return (
      <View>
        <Text style = {styles.headingText}>Trending Places</Text>
        <View style ={[styles.card, styles.cardElevated]}>
            <Image 
            style = {styles.cardImage}
            source={{uri:'https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-750-20151104113424.jpg'}}
            />
            <View style={styles.cardBody}>
                <Text style = {styles.cardTitle}>Taj Mahal</Text>
                <Text style = {styles.cardLabel}>Agra, UP</Text>
                <Text style = {styles.cardDescription}>The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.</Text>
                <Text style = {styles.cardFooter}>Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001</Text>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    headingText : {
        fontSize : 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card :{
       width: 350,
       height: 400,
       borderRadius: 6,
       marginVertical: 12,
       marginHorizontal: 16
    },
    cardElevated: {
       backgroundColor: 'white',
       elevation : 3,
       shadowOffset : {
        width : 1,
        height:1
       }
    },
    cardImage: {
        height : 200,
        marginBottom : 8,
        borderTopLeftRadius : 6,
        borderTopRightRadius : 6,
        resizeMode:'stretch'
    },
    cardBody :{
        flex : 1,
        flexGrow : 1,
        paddingHorizontal : 12
    },
    cardTitle: {
        color : 'black',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom : 6
    },
    cardLabel: {
        color : 'black',
        fontSize: 14,
        marginBottom : 4
    },
    cardDescription:{
        color : '#758283',
        fontSize : 12,
        marginBottom : 12
    },
    cardFooter:{
        color : 'black',
        fontSize : 10,
        marginBottom : 4
    }
})