import { Alert } from 'react-native';
export default function SubtrairAdd(number1, number2) {
    const sum = parseFloat(number1) - parseFloat(number2);
    if (isNaN(sum)) {
        Alert.alert('Erro', 'Por favor, insira números válidos.');
    } else {
        alert(`A subtração é: ${sum}`);
    }
}