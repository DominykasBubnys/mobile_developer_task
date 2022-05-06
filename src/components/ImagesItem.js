import React from 'react'
import { TouchableOpacity, Text, ImageBackground } from 'react-native'
import classes from '../styles/ItemStyles'

const ImagesItem = ({ url, navigation }) => {
  const imagePressHandler = () => {
    navigation.navigate('Tapped', {
      url
    })
  }

  return (
    <TouchableOpacity onPress={imagePressHandler} style={classes.container}>
      <ImageBackground
        source={{
          uri: url
        }}
        style={classes.item}
      >
        <Text style={classes.text}>{'Sum'}</Text>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default ImagesItem
