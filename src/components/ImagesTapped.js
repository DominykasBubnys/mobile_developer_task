import React from 'react'
import { View, Text } from 'react-native'

const ImagesItem = ({ route, navigation }) => {
  console.log('props: ', route)

  return (
    <View>
      <Text>Component</Text>
    </View>
  )
}

export default ImagesItem
