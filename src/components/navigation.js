import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import List from '../components/ImagesList'
import Tapped from '../components/ImagesTapped'
const ModalStack = createStackNavigator()

const MyTheme = {
  dark: false,
  colors: {
    primary: 'red',
    card: 'rgba(78, 78, 78, 0.9)',
    text: 'rgb(28, 28, 30)',
    backgroundColor: 'black',
    background: 'black',
    notification: 'rgb(255, 69, 58)',
    color: 'red'
  }
}

const App = (props) => (
  <NavigationContainer theme={MyTheme}>
    <ModalStack.Navigator
      initialRouteName="List"
      detachInactiveScreens={true}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animationEnabled: false,
        unmountInactiveScreen: true,
        detachPreviousScreen: true
      }}
    >
      <ModalStack.Screen name="List" component={List} />
      <ModalStack.Screen name="Tapped" component={Tapped} />
    </ModalStack.Navigator>
  </NavigationContainer>
)

export default App
