import React from 'react'
import { TouchableOpacity, Text, ImageBackground } from 'react-native'
import getSum from '../components/utils/getSum'
import classes from '../styles/ItemStyles'

const ImagesItem = ({ url, navigation }) => {
  const imagePressHandler = () => {
    navigation.navigate('Tapped', {
      url
    })
  }

  const sum = getSum(url)

  return (
    <TouchableOpacity onPress={imagePressHandler} style={classes.container}>
      <ImageBackground
        source={{
          uri: url
        }}
        style={classes.item}
      >
        <Text style={classes.text}>{sum}</Text>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default ImagesItem
