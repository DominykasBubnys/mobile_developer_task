import React from 'react'
import { View, Text } from 'react-native'
import DogUrl from '../dog_urls.json'
import ImagesItem from './ImagesItem'
import classes from '../styles/ListStyles'

const ImagesList = ({ navigation }) => {
  const URLArray = DogUrl.urls ? [...DogUrl.urls.slice(0, 15)] : []

  return (
    <View style={classes.container}>
      <Text style={classes.header}>Gallery</Text>
      <View style={classes.list_container}>
        {URLArray.map((url) => (
          <ImagesItem navigation={navigation} key={Math.random()} url={url} />
        ))}
      </View>
    </View>
  )
}

export default ImagesList
