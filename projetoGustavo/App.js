import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from 'react-native-web';
import CustomButton from './components/custom-button/CustomButtom';
import TextInputBox from './text-imput-text/TextImputText';
import Choose from './actions/Choose';

export default function App() {
  const [selectedOption, setSelectedOption] = useState('soma');
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
      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue) => setSelectedOption(itemValue)}
        style={styles.picker}
        
      >
          <Picker.Item label="Soma" value="soma" />
          <Picker.Item label="Subtração" value="sub" />
          <Picker.Item label="Multiplicação" value="mult" />
          <Picker.Item label="Divisão" value="div"/>
      </Picker>
      <CustomButton
        title="Somar"
        onPress={() => Choose(selectedOption,number1, number2)}
        style={styles.button}
      />

      <Text></Text>
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
  picker: {
    width: 200,
    height: 50,
    marginBottom: 20,
  },
});