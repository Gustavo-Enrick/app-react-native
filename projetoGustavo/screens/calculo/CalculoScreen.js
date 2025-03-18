import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, View, Text } from 'react-native';
import TextInputBox from '../../components/text-input-text/TextInputText';
import CustomButton from '../../components/custom-button/CustomButtom';
import MathUtils from '../../utils/MathUtils';

function CalculoScreen() {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [selectedValue, setSelectedValue] = useState('Somar');
    
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
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)}
            >
                <Picker.Item label="Somar" value="soma" />
                <Picker.Item label="Subtrair" value="sub" />
                <Picker.Item label="Multiplicar" value="mult" />
                <Picker.Item label="Dividir" value="div" />
            </Picker>

            <CustomButton
                title="Calcular"
                onPress={() =>
                    MathUtils.FuncaoCalculo(number1, number2, selectedValue)}
                style={styles.button}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    picker: {
        height: 50,
        width: 200,
        margin: 20
    }
});
export default CalculoScreen;
