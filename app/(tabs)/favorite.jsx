import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function favorite () {
  return (
    <View>
      <Text style={styles.favText}>favorite</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    favText: {
        fontSize: 30,
        color: 'red'
    }
    })