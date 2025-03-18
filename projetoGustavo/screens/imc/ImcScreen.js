import React, { useState } from "react";
// import { TextInput, View } from "react-native-web";
import { View, Text, StyleSheet } from 'react-native';
import TextInputBox from "../../components/text-input-text/TextInputText";
import MathUtils from "../../utils/MathUtils";
import CustomButton from "../../components/custom-button/CustomButtom";

function IMCScreen() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

    return (
        <View>
            <Text>Calculo de IMC</Text>
            <TextInputBox
                value={peso}
                onChangeText={setPeso}
                placeholder="Digite o peso (Kg)"
                keyboardType="numeric"
            />
            <TextInputBox
                value={altura}
                onChangeText={setAltura}
                placeholder="Digite a altura (m)"
                keyboardType="numeric"
            />

            <CustomButton
                title="Calcular"
                onPress={() =>
                    MathUtils.FuncaoIMC(peso, altura)}
                style={styles.button}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default IMCScreen;