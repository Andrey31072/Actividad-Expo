import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './SettingsScreenStyles';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
        <Text style={styles.title}>Configuración</Text>
        <Text>Aquí irán las opciones de configuración</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

