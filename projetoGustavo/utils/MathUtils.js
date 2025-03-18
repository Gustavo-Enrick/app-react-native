class MathUtils {
    static Choose(selectedOption, number1, number2) {
        var sum;

        switch (selectedOption) {
            case 'soma':
                sum = parseFloat(number1) + parseFloat(number2);
                break;
            case 'sub':
                sum = parseFloat(number1) - parseFloat(number2);
                break;
            case 'mult':
                sum = parseFloat(number1) * parseFloat(number2);
                break;
            case 'div':
                sum = parseFloat(number1) / parseFloat(number2);
                break;
            default:
                break;
        }

        if (isNaN(sum) || !isFinite(sum)) {
            alert('Por favor, insira números válidos.');
        } else {
            alert(`A soma é: ${sum}`);
        }
    }

    static FuncaoIMC(peso, altura) {
        let calc = parseFloat(peso) / parseFloat((altura * altura));
        let result = '';
        if (calc < 18.5) {
            result = 'magreza';
        } else if (calc <= 24.9) {
            result = 'normal';
        } else if (calc <= 29.9) {
            result = 'sobrepeso';
        } else if (calc <= 39.9) {
        } else {
            result = 'obesidade grave';
        }

        alert(`Sua situação é: ${result}`);
    }
}
export default MathUtils;
