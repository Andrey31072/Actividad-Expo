import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import DrawerNavigator from './navigation/DrawerNavigator';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#9799cd',
    background: '#EEF0FF',
    card: '#FFFFFF',
    text: '#1F2937',
    border: '#E2E6F0',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar style="dark" />
      <DrawerNavigator />
    </NavigationContainer>
  );
}
