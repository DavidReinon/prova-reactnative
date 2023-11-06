import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import CalcularIMC from './components/CalcularIMC';

const App = () => {
  const [informacio, setInformacio] = useState({pes: 0, alçada: 0});
  const [resultatAMostrar, setResultatAMostrar] = useState({pes: 0, alçada: 0});
  const [desabilitarRespuesta, setDesabilitarRespuesta] = useState(true);

  const definirProps = () => {
    setDesabilitarRespuesta(false);
    setResultatAMostrar({pes: informacio.pes, alçada: informacio.alçada});
  };

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Calcular IMC</Text>
      <TextInput
        style={styles.textInput}
        defaultValue=""
        onChangeText={newText =>
          setInformacio({...informacio, pes: Number(newText)})
        }
        placeholder="Pes"
      />
      <TextInput
        style={styles.textInput}
        defaultValue=""
        onChangeText={newText =>
          setInformacio({...informacio, alçada: Number(newText)})
        }
        placeholder="Alçada"
      />
      <Button icon="alien" mode="contained" onPress={definirProps}>
        Calcula
      </Button>
      <CalcularIMC
        disabled={desabilitarRespuesta}
        pes={Number(resultatAMostrar.pes)}
        alçada={Number(resultatAMostrar.alçada)}
      />
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
