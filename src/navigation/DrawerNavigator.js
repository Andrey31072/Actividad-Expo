import React from 'react';
import { Pressable } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import TabNavigator from './TabNavigator';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: true,
        headerStyle: { backgroundColor: '#a3a4da' },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: '700' },
        headerLeft: ({ canGoBack }) => {
          if (canGoBack) {
            return (
              <Pressable onPress={() => navigation.goBack()} style={{ paddingHorizontal: 12 }}>
                <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
              </Pressable>
            );
          }

          return (
            <Pressable onPress={() => navigation.toggleDrawer()} style={{ paddingHorizontal: 12 }}>
              <Ionicons name="menu" size={24} color="#FFFFFF" />
            </Pressable>
          );
        },
      })}
    >
      <Drawer.Screen
        name="MainTabs"
        component={TabNavigator}
        options={{ title: 'Inicio', headerShown: false }}
      />
      <Drawer.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} />
      <Drawer.Screen name="Settings" component={SettingsScreen} options={{ title: 'Configuración' }} />
    </Drawer.Navigator>
  );
}