import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  button: {
    width: '70%',
    padding: 10,
    backgroundColor: 'rgba(39, 14, 27, 0.85)',
    margin: 10,
    borderRadius: 30
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 5
  },

  image: {
    width: '90%',
    height: '50%',
    borderRadius: 30,
    margin: 10
  }
})

export default styles
