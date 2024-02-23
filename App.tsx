import { View, Text, SafeAreaView, ScrollView, useColorScheme, StyleSheet } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'

const App = () => {
  const isDark = useColorScheme() === 'dark'
  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView>
        <FlatCards/>
        <ElevatedCards/>
        <FancyCard />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : 'gray',
    flex : 1
  }
})

export default App