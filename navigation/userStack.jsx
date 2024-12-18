import React from 'react';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { theme } from '../assets/theme';
import SignUpScreen from '../app/signUp';

import HomeScreen from '../app/homePage';
import UserListScreen from '../app/userList';

import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();

// function TabNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: { backgroundColor: theme.colorLightBrown },
//         tabBarActiveTintColor: theme.colorDarkBrown,
//         tabBarInactiveTintColor: 'black',
//       }}
//     >
//       <Tab.Screen
//         name="Perfil"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <MaterialCommunityIcons
//               name="account"
//               size={24}
//               color={focused ? theme.colorDarkBrown : 'black'}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Medicamentos"
//         component={ProfileScreen} // Exemplo corrigido para evitar erro de referência.
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <MaterialCommunityIcons
//               name="pill"
//               size={24}
//               color={focused ? theme.colorDarkBrown : 'black'}
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

export default function UserStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      <Stack.Screen name="User Li" component={UserListScreen} />
    </Stack.Navigator>
  );
}
