import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden'
  },

  item: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8
  },

  text: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    padding: 5,
    borderRadius: 30,
    fontStyle: 'italic'
  }
})

export default style
