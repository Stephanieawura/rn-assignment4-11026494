import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import WelcomeScreen from './screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JobsScreen from './screens/JobsScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Welcome"
          screenOptions=
            {{
              headerShown:false
              }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Jobs" component={JobsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  
});
export default App