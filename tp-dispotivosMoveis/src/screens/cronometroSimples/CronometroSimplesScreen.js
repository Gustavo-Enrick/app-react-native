import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import CustomButton from "../../components/customButtom/CustomButtom";
import CronometroUtil from "../../utils/CronometroUtil";

function CronometroSimplesScreen() {
  const [getMilissegundo, setMilissegundo] = useState(0);
  const [getSegundo, setSegundo] = useState(0);
  const [getMinuto, setMinuto] = useState(0);

  const cronProps = {
    getMilissegundo: getMilissegundo,
    setMilissegundo: setMilissegundo,
    getSegundo: getSegundo,
    setSegundo: setSegundo,
    getMinuto: getMinuto,
    setMinuto: setMinuto,
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.cronometro}>
        {CronometroUtil.FormatarTempo(getMinuto, getSegundo, getMilissegundo)}
      </Text>

      <View style={styles.containerBotao}>
        <CustomButton
          title="Começar"
          onPress={() => {
            CronometroUtil.Comecar(cronProps);
          }}
        />

        <CustomButton
          title="Pausar"
          onPress={() => {
            CronometroUtil.Pausar();
          }}
        />

        <CustomButton
          title="Reiniciar"
          onPress={() => {
            CronometroUtil.Reiniciar(cronProps);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    margin: 30,
    padding: 30,
    borderRadius: 5,
  },
  containerBotao: {
    flexDirection: "row",
    margin: 30,
  },
  cronometro: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#333",
    backgroundColor: "#f2f2f2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    textAlign: "center",
    width: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default CronometroSimplesScreen;
