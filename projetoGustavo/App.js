// import React, { useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View,ScrollView } from 'react-native';
// import { Picker} from 'react-native-web';
// import CustomButton from './components/custom-button/CustomButtom';
// import TextInputBox from './text-imput-text/TextImputText';
// import MathUtils from './utils/MathUtils';
// import Logo from './components/Logo/Logo';

// export default function App() {
//   const [selectedOption, setSelectedOption] = useState('soma');
//   const [number1, setNumber1] = useState('');
//   const [number2, setNumber2] = useState('');

//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto"/>
//       <ScrollView contentContainerStyle={styles.container}>
//       <Logo/>
//       <Text style={styles.title}>Soma de Dois Números</Text>
//       <TextInputBox
//         value={number1}
//         onChangeText={setNumber1}
//         placeholder="Digite o primeiro número"
//         keyboardType="numeric"
//       />
//       <TextInputBox
//         value={number2}
//         onChangeText={setNumber2}
//         placeholder="Digite o segundo número"
//         keyboardType="numeric"
//       />
//       <Picker
//         selectedValue={selectedOption}
//         onValueChange={(itemValue) => setSelectedOption(itemValue)}
//         style={styles.picker}
//       >
//           <Picker.Item label="Soma" value="soma" />
//           <Picker.Item label="Subtração" value="sub" />
//           <Picker.Item label="Multiplicação" value="mult" />
//           <Picker.Item label="Divisão" value="div"/>
//       </Picker>

//       <CustomButton
//         title="Realizar Operação"
//         onPress={() => MathUtils.Choose(selectedOption,number1, number2)}
//         style={styles.button}
//       />
//       <Text></Text>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   picker: {
//     width: 200,
//     height: 50,
//     marginBottom: 20,
//     textAlign: 'center'
//   },
// });


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalculoScreen from './screens/calculo/CalculoScreen';
import HomeScreen from './screens/home/HomeScreen';
import IMCScreen from './screens/imc/ImcScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Calculo" component={CalculoScreen} />
        <Tab.Screen name="IMC" component={IMCScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}