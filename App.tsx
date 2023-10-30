import React from 'react';
import {useState} from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import CalcularIMG from './components/CalcularIMG';

const App = () => {
  const [pes, setPes] = useState(0);
  const [alçada, setAlçada] = useState(0);
  const [desabilitarRespuesta, setDesabilitarRespuesta] = useState(true);

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Calcular IMC</Text>
      <TextInput
        style={styles.textInput}
        defaultValue=""
        onChangeText={newText => setPes(parseInt(newText))}
        placeholder="Pes"
        // onPointerCancelCapture={() => setDesabilitarRespuesta(true)}
      />
      <TextInput
        style={styles.textInput}
        defaultValue=""
        onChangeText={newText => setAlçada(parseInt(newText))}
        placeholder="Alçada"
        // onPointerCancelCapture={() => setDesabilitarRespuesta(true)}
      />
      <Button
        icon="alien"
        mode="contained"
        onPress={() => setDesabilitarRespuesta(false)}>
        Calcula
      </Button>
      <CalcularIMG
        disabled={desabilitarRespuesta}
        pes={pes}
        alçada={alçada}></CalcularIMG>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    alignSelf: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  textInput: {
    margin: 20,
  },
  highlight: {
    fontWeight: '700',
  },
});
export default App;
