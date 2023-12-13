import React from 'react';
import {useState} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import UnCicle from './components/UnCicle';
import LlistatProfesCicle from './components/LlistatProfesCicle';
import {Switch} from 'react-native-paper';

const App = () => {
  const [info, setInfo] = useState(require('./utils/dades.json'));
  const [targetaSeleccionada, setTargetaSeleccionada] = useState(null);
  const [cursSeleccionat, setCursSeleccionat] = useState(1);
  const [switchActiu, setSwicthActiu] = useState(false);

  const targetaSeleccionadaFillPare = index => {
    setTargetaSeleccionada(index);
  };

  const interruptor = () => {
    if (!switchActiu) {
      setSwicthActiu(true);
      setCursSeleccionat(2);
      return;
    }
    setSwicthActiu(false);
    setCursSeleccionat(1);
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.sectionCicle}>
        <Text style={styles.sectionTitle}>Unitat TICS</Text>
        <View style={styles.contenidorTargetes}>
          <ScrollView horizontal={true}>
            {info.unitatTics.map((element, index) => {
              return (
                <UnCicle
                  key={index}
                  posicioAquestaTargeta={index}
                  targetaSeleccionada={targetaSeleccionada}
                  cambiarTargetaSeleccionadaFillPare={
                    targetaSeleccionadaFillPare
                  }
                  titol={element.cicle}
                  descripcio={element.nomCicle}></UnCicle>
              );
            })}
          </ScrollView>
        </View>
      </View>
      {targetaSeleccionada == 0 && (
        <View
          style={{
            flex: 0.1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'grey',
          }}>
          <Text
            style={switchActiu ? styles.fontStyle : styles.SelectedFontSyle}>
            1º
          </Text>
          <Switch value={switchActiu} onValueChange={interruptor} />
          <Text
            style={switchActiu ? styles.SelectedFontSyle : styles.fontStyle}>
            2º
          </Text>
        </View>
      )}
      <View style={styles.sectionProfesors}>
        <LlistatProfesCicle
          cicleSeleccionat={targetaSeleccionada}
          dades={info}
          cursSeleccionat={cursSeleccionat}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  contenidorTargetes: {
    //backgroundColor: 'red',
    flexDirection: 'row',
  },
  sectionCicle: {
    flex: 0.3,
  },
  sectionProfesors: {
    // borderColor: 'red',
    // borderWidth: 3,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  fontStyle: {
    fontSize: 20,
  },
  SelectedFontSyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6F3F87',
  },
});
export default App;
