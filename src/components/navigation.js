import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListScreen from '../components/ImagesList'
import TappedScreen from '../components/ImagesTapped'
import { View } from 'react-native'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
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
          <Stack.Screen name="List" component={ListScreen} />
          <Stack.Screen name="Tapped" component={TappedScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default App
