import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#a3a4da',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: '700',
        },
        contentStyle: {
          backgroundColor: '#EEF0FF',
        },
        headerLeft: ({ canGoBack }) => {
          if (canGoBack) {
            return (
              <Pressable
                onPress={() => navigation.goBack()}
                style={{ paddingHorizontal: 12 }}
              >
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color="#FFFFFF"
                />
              </Pressable>
            );
          }

          return (
            <Pressable
              onPress={() => navigation.toggleDrawer()}
              style={{ paddingHorizontal: 12 }}
            >
              <Ionicons
                name="menu"
                size={24}
                color="#FFFFFF"
              />
            </Pressable>
          );
        },
      })}
    >
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{ title: 'Inicio' }}
      />

      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ title: 'Detalle' }}
      />
    </Stack.Navigator>
  );
}