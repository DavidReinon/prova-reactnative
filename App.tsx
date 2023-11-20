import React from 'react';
import {useState} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import UnCicle from './components/UnCicle';
import LlistatProfesCicle from './components/LlistatProfesCicle';

const App = () => {
  const [info, setInfo] = useState(require('./utils/dades.json'));
  const [targetaSeleccionada, setTargetaSeleccionada] = useState(false);
  const [indexMostrar, setIndexMostrar] = useState(0);

  const cambiarEstatTargeta = (estat, curs) => {
    setTargetaSeleccionada(estat);
    setIndexMostrar(curs);
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.sectionCicle}>
        <Text style={styles.sectionTitle}>Unitat TICS</Text>
        <ScrollView horizontal={true}>
          <View style={styles.contenidorTargetes}>
            {info.unitatTics.map((element, index) => {
              return (
                <UnCicle
                  key={index}
                  index={index}
                  comunicacioPare={cambiarEstatTargeta}
                  titol={element.cicle}
                  descripcio={element.nomCicle}></UnCicle>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View style={styles.sectionProfesors}>
        <LlistatProfesCicle
          cicleSeleccionat={indexMostrar}
          dades={info}></LlistatProfesCicle>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  contenidorTargetes: {
    flexDirection: 'row',
  },
  sectionCicle: {
    flex: 0.25,
  },
  sectionProfesors: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
});
export default App;
