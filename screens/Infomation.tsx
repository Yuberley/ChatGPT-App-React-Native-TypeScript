import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Infomation = () => {
  return (
    <View style={styles.container}>
      <Text>Infomation</Text>
    </View>
  )
}

export default Infomation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})