import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  Platform,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Select({ selectedValue, onValueChange, items = [], style, pickerStyle }) {
  const [visible, setVisible] = useState(false);

  if (Platform.OS === 'android') {
    return (
      <Picker selectedValue={selectedValue} onValueChange={onValueChange} style={pickerStyle}>
        {items.map((it) => (
          <Picker.Item key={String(it.value)} label={it.label} value={it.value} />
        ))}
      </Picker>
    );
  }

  const currentLabel = items.find((i) => i.value === selectedValue)?.label || 'Seleccione...';
  const resolvedPickerStyle = [
    styles.picker,
    pickerStyle,
    Platform.OS === 'ios' ? styles.iosPicker : null,
  ];

  return (
    <View style={style}>
      <Pressable onPress={() => setVisible(true)} style={styles.previewButton}>
        <Text style={styles.previewText}>{currentLabel}</Text>
      </Pressable>

      <Modal visible={visible} animationType="slide" transparent>
        <SafeAreaView style={styles.modalOverlay}>
          <View style={styles.pickerContainer}>
            <View style={styles.pickerHeader}>
              <Pressable onPress={() => setVisible(false)} style={styles.headerButton}>
                <Text style={styles.headerButtonText}>Cerrar</Text>
              </Pressable>
              <Pressable onPress={() => setVisible(false)} style={styles.headerButton}>
                <Text style={styles.headerButtonText}>OK</Text>
              </Pressable>
            </View>
            <Picker
              selectedValue={selectedValue}
              onValueChange={onValueChange}
              style={resolvedPickerStyle}
              itemStyle={styles.pickerItem}
            >
              {items.map((it) => (
                <Picker.Item key={String(it.value)} label={it.label} value={it.value} />
              ))}
            </Picker>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  previewButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  previewText: {
    color: '#334155',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  pickerContainer: {
    backgroundColor: '#FFFFFF',
  },
  pickerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#E6E9F2',
  },
  headerButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  headerButtonText: {
    color: '#5B61FF',
    fontWeight: '700',
  },
  pickerItem: {
    color: '#111827',
    fontSize: 18,
  },
  iosPicker: {
    height: 216,
    width: '100%',
  },
});
