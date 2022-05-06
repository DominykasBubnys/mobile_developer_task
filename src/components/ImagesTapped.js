import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import downloadPhoto from '../components/utils/downloadPhoto'
import classes from '../styles/TappedStyles'

const ImagesTapped = ({ route, navigation }) => {
  const { url } = route.params
  const REMOTE_IMAGE_PATH = url

  const navigateBackHandler = () => {
    navigation.goBack()
  }

  const downloadHandler = () => {
    downloadPhoto(url)
  }

  return (
    <View style={classes.container}>
      <Image
        source={{
          uri: REMOTE_IMAGE_PATH
        }}
        style={classes.image}
      />
      <TouchableOpacity style={classes.button} onPress={downloadHandler}>
        <Text style={classes.text}>Download Image</Text>
      </TouchableOpacity>

      <TouchableOpacity style={classes.button} onPress={navigateBackHandler}>
        <Text style={classes.text}>Back to gallery</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ImagesTapped
