import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/custom-button/CustomButtom';
import TextInputBox from './text-imput-text/TextImputText';
import FuncaoSoma from './actions/AddFunction';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Soma de Dois Números</Text>
      <TextInputBox
        value={number1}
        onChangeText={setNumber1}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
      />
      <TextInputBox
        value={number2}
        onChangeText={setNumber2}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
      />
      <CustomButton
        title="Somar"
        onPress={() => FuncaoSoma(number1, number2)}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});