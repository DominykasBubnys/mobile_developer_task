import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    padding: 0,
    margin: 0,
    backgroundColor: 'black'
  },

  header: {
    borderColor: 'red',
    borderWidth: 2,
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    margin: 20,
    fontStyle: 'italic'
  },

  list_container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 30,
    overflow: 'hidden'
  }
})

export default style
