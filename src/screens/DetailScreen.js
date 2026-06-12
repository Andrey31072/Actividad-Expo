import { ScrollView, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/DetailScreenStyles';

export default function DetailScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
        <Text style={styles.title}>Pantalla de Detalle</Text>
        <Button title="Volver al menu principal" onPress={() => navigation.goBack()} />
      </ScrollView>
    </SafeAreaView>
  );
}

