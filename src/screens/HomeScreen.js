import React, { useState } from 'react';
import { ScrollView, View, Text, Modal, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Select from '../components/forms/Select';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/HomeScreenStyles';

function AccentButton({ label, color, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.accentButton,
        { backgroundColor: color, opacity: pressed ? 0.78 : 1 },
      ]}
      onPress={onPress}
    >
      <Text style={styles.accentButtonText}>{label}</Text>
    </Pressable>
  );
}

export default function HomeScreen() {
  const navigation = useNavigation();
  const [message, setMessage] = useState('Selecciona una acción');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Opción 1');

  const handleButton = (text) => setMessage(text);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.screenContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.headerCard}>
        <Text style={styles.pageTitle}>Panel interactivo</Text>
        <Text style={styles.subtitle}>Actividad de App con Expo todo funcional para IOS y ANDROID.</Text>
      </View>

      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Acciones rápidas</Text>
        <View style={styles.actionRow}>
          <AccentButton label="Botón 1" color="#22C55E" onPress={() => handleButton('Botón 1 presionado ✅')} />
          <AccentButton label="Botón 2" color="#3B82F6" onPress={() => handleButton('Botón 2 presionado ⚡')} />
          <AccentButton label="Botón 3" color="#F97316" onPress={() => handleButton('Botón 3 presionado 🌟')} />
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Estado actual</Text>
          <Text style={styles.infoText}>{message}</Text>
        </View>
      </View>

      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Modal</Text>
        <Pressable style={({ pressed }) => [styles.primaryButton, pressed && styles.buttonPressed]} onPress={() => setModalVisible(true)}>
          <Text style={styles.primaryButtonText}>Abrir Modal</Text>
        </Pressable>
      </View>

      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Selector</Text>
        <View style={styles.pickerWrapper}>
          <Select
            selectedValue={selectedOption}
            onValueChange={(value) => setSelectedOption(value)}
            items={[
              { label: 'Opción 1', value: 'Opción 1' },
              { label: 'Opción 2', value: 'Opción 2' },
              { label: 'Opción 3', value: 'Opción 3' },
            ]}
            pickerStyle={styles.picker}
          />
        </View>
        <Text style={styles.pickerText}>Seleccionado: {selectedOption}</Text>
      </View>

      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Navegación</Text>
        <Pressable style={({ pressed }) => [styles.secondaryButton, pressed && styles.buttonPressed]} onPress={() => navigation.navigate('Detail')}>
          <Text style={styles.secondaryButtonText}>Ir a pantalla Detalle</Text>
        </Pressable>
      </View>

      <Modal visible={modalVisible} transparent animationType="slide" onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>¡Hola!</Text>
            <Text style={styles.modalDescription}>Este modal está diseñado para verse elegante y moderno.</Text>
            <Pressable style={({ pressed }) => [styles.modalCloseButton, pressed && styles.buttonPressed]} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCloseButtonText}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}

    