import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {

    function openWebsite(websiteLink : string) {
        Linking.openURL(websiteLink)
    }

  return (
    <View style ={styles.container}>
      <Text style = {styles.headerText}>Blog Card</Text>
      <View style = {[styles.card, styles.elevatedCard]}>
        <View style = {styles.headingContainer}>
            <Text style ={styles.heading}>
                What is android?
            </Text>
        </View>
        <Image
        style = {styles.cardImage}
            source={ {
                uri : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/1745px-Android_robot.svg.png'
            }}
         />
         <View style ={styles.bodyContainer}>
            <Text numberOfLines={3} style = {{color : 'black'}}>
            Android is a mobile operating system based on a modified version of the Linux kernel and other open-source software, designed primarily for touchscreen mobile devices such as smartphones and tablets.
                </Text>
         </View>
         <View style ={styles.footerContainer}>
            <TouchableOpacity
                onPress={() => openWebsite('https://en.wikipedia.org/wiki/Android_(operating_system)')}
            >
                <Text style ={styles.links}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => openWebsite('https://medium.com/androiddevelopers')}
            >
                <Text style ={styles.links}>Medium Link</Text>
            </TouchableOpacity>
         </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        padding : 8 
    },
    headerText : {
        fontSize : 22,
        fontWeight : 'bold',
        color : 'white'
    },
    heading : {
        fontSize : 16,
        fontWeight : 'bold',
        color : 'black',
        padding : 6
    },
    elevatedCard : {
       borderRadius : 8,
       elevation : 3,
       shadowOffset : {height : 1, width : 1},
       shadowColor : 'white',
       shadowOpacity : 1
    },
    card : {
        margin : 8,
        backgroundColor : 'white'
    },
    headingContainer : {
        flexDirection : 'row',
        height : 40,
        justifyContent : 'center'
    },
    cardImage : {
        height : 100,
        marginBottom : 8,
        resizeMode:'center',
        borderTopLeftRadius : 8,
        borderTopRightRadius : 8
        
    },
    bodyContainer : {
        padding : 8
    },
    footerContainer : {
        padding : 8,
        flexDirection: 'row',
        alignItems : 'center',
        justifyContent: 'space-evenly'
    },
    links : {
        color : 'white', 
        marginBottom : 8, 
        paddingVertical : 6,
        paddingHorizontal: 12,
        fontSize: 16,
        backgroundColor : 'black',
        elevation : 3,
        borderRadius : 6
    }
})