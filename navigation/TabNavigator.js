import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable } from 'react-native';
import HomeStack from './HomeStack';
import CalculatorScreen from '../screens/CalculatorScreen';
import ScrollLoadingScreen from '../screens/ScrollLoadingScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerStyle: { backgroundColor: '#a3a4da' },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: '700' },
        headerLeft: () => (
          <Pressable onPress={() => navigation.toggleDrawer()} style={{ paddingHorizontal: 12 }}>
            <Ionicons name="menu" size={24} color="#FFFFFF" />
          </Pressable>
        ),
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Calculator') iconName = focused ? 'calculator' : 'calculator-outline';
          else if (route.name === 'ScrollLoad') iconName = focused ? 'list' : 'list-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#5B61FF',
        tabBarInactiveTintColor: '#8A8A9F',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#E2E6F0',
          height: 62,
          paddingBottom: 8,
          paddingTop: 6,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{ title: 'Inicio', headerShown: false }} />
      <Tab.Screen name="Calculator" component={CalculatorScreen} options={{ title: 'Calculadora' }} />
      <Tab.Screen name="ScrollLoad" component={ScrollLoadingScreen} options={{ title: 'Scroll con carga' }} />
    </Tab.Navigator>
  );
}