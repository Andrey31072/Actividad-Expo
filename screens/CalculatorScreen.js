import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './CalculatorScreenStyles';

function CalculatorButton({ label, onPress, variant = 'default' }) {
  const buttonStyles = [styles.calcButton];
  if (variant === 'accent') buttonStyles.push(styles.calcButtonAccent);
  else if (variant === 'secondary') buttonStyles.push(styles.calcButtonSecondary);
  return (
    <Pressable
      style={({ pressed }) => [buttonStyles, pressed && styles.buttonPressed]}
      onPress={onPress}
    >
      <Text style={[styles.calcButtonText, variant === 'accent' && styles.calcButtonTextAccent]}>{label}</Text>
    </Pressable>
  );
}

export default function CalculatorScreen() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const sanitizeNumber = (text) => {
    // allow leading -, digits and a single decimal point
    const t = text.replace(',', '.');
    if (t === '' || t === '-' || /^-?\d*\.?\d*$/.test(t)) return t;
    // otherwise ignore the new charactersp
    return null;
  };

  const handleNum1Change = (text) => {
    const s = sanitizeNumber(text);
    if (s !== null) setNum1(s);
  };

  const handleNum2Change = (text) => {
    const s = sanitizeNumber(text);
    if (s !== null) setNum2(s);
  };

  const toggleSign = (which) => {
    if (which === 1) {
      setNum1((v) => (v.startsWith('-') ? v.slice(1) : '-' + v));
    } else {
      setNum2((v) => (v.startsWith('-') ? v.slice(1) : '-' + v));
    }
  };

  const validate = () => {
    if (num1 === '' || num2 === '') {
      Alert.alert('Error', 'Ingresa ambos números');
      return false;
    }
    if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
      Alert.alert('Error', 'Solo se permiten números');
      return false;
    }
    return true;
  };

  const calculate = (operation) => {
    if (!validate()) return;
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let res;
    switch (operation) {
      case 'sum': res = a + b; break;
      case 'sub': res = a - b; break;
      case 'mul': res = a * b; break;
      case 'div': res = b !== 0 ? a / b : 'No se puede dividir por 0'; break;
      default: return;
    }
    setResult(res);
  };

  const clear = () => {
    setNum1('');
    setNum2('');
    setResult(null);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoiding}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.screenContent}
            keyboardShouldPersistTaps="handled"
          >
          <View style={styles.headerCard}>
            <Text style={styles.title}>Calculadora elegante</Text>
            <Text style={styles.subtitle}>Introduce dos valores y selecciona una operación.</Text>
          </View>

          <View style={styles.calcCard}>
        <View style={styles.inputRow}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Número 1"
            keyboardType={Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'numeric'}
            autoCorrect={false}
            returnKeyType="done"
            blurOnSubmit={true}
            onSubmitEditing={Keyboard.dismiss}
            value={num1}
            onChangeText={handleNum1Change}
            placeholderTextColor="#94A3B8"
          />
          <Pressable style={styles.signButton} onPress={() => toggleSign(1)}>
            <Text style={styles.signButtonText}>{num1.startsWith('-') ? '−' : '+'}</Text>
          </Pressable>
        </View>

        <View style={styles.inputRow}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Número 2"
            keyboardType={Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'numeric'}
            autoCorrect={false}
            returnKeyType="done"
            blurOnSubmit={true}
            onSubmitEditing={Keyboard.dismiss}
            value={num2}
            onChangeText={handleNum2Change}
            placeholderTextColor="#94A3B8"
          />
          <Pressable style={styles.signButton} onPress={() => toggleSign(2)}>
            <Text style={styles.signButtonText}>{num2.startsWith('-') ? '−' : '+'}</Text>
          </Pressable>
        </View>

        <View style={styles.gridRow}>
          <CalculatorButton label="Sumar" variant="accent" onPress={() => calculate('sum')} />
          <CalculatorButton label="Restar" variant="accent" onPress={() => calculate('sub')} />
        </View>
        <View style={styles.gridRow}>
          <CalculatorButton label="Multiplicar" variant="accent" onPress={() => calculate('mul')} />
          <CalculatorButton label="Dividir" variant="accent" onPress={() => calculate('div')} />
        </View>

        <Pressable style={({ pressed }) => [styles.clearButton, pressed && styles.buttonPressed]} onPress={clear}>
          <Text style={styles.clearButtonText}>Limpiar todo</Text>
        </Pressable>
      </View>

      <View style={styles.resultCard}>
        <Text style={styles.resultLabel}>Resultado</Text>
        <Text style={styles.result}>{result !== null ? result : '---'}</Text>
      </View>
    </ScrollView>
  </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
</SafeAreaView>
  );
}
