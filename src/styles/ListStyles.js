import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    padding: 0,
    margin: 0,
    backgroundColor: 'black',
    overflow: 'hidden'
  },

  header: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    margin: 20,
    fontStyle: 'italic',
    letterSpacing: 4
  },

  list_container: {
    width: '94%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(72, 41, 57, 0.3)',
    padding: 10,
    borderRadius: 30,
    overflow: 'hidden'
  }
})

export default style
