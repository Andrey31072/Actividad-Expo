import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './ProfileScreenStyles';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
        <Text style={styles.title}>Perfil de Usuario</Text>
        <Text>Esta es la pantalla de perfil</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

