import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import UserList from './screens/UserList'
import CreateUser from './screens/CreateUser'
import UserDetail from './screens/UserDetail'

const Stack = createStackNavigator()

function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserList" component={UserList} options={{title: 'Lista de Usuarios'}} />
      <Stack.Screen name="CreateUserScreen" component={CreateUser}  options={{title: 'Crear nuevo Usuario'}} />
      <Stack.Screen name="UserDetail" component={UserDetail}  options={{title: 'Detalles de Usuarios'}} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
