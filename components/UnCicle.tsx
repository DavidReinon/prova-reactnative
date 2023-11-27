import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Surface} from 'react-native-paper';

const UnCicle = ({
  titol,
  descripcio,
  targetaSeleccionada,
  cambiarTargetaSeleccionadaFillPare,
  posicioAquestaTargeta,
}) => {
  //const [estilReactiu, setEstilReactiu] = useState(styles.estilTargeta);

  const funcioCambiarTargetaSeleccionada = () => {
    cambiarTargetaSeleccionadaFillPare(posicioAquestaTargeta);

    // if (targetaSeleccionadaFillPare === posicioAquestaTargeta) {
    //   setEstilReactiu(styles.estilTargetaSeleccionada);
    //   return;
    // }
  };
  return (
    <View>
      <TouchableOpacity onPress={funcioCambiarTargetaSeleccionada}>
        <Surface
          style={
            targetaSeleccionada === posicioAquestaTargeta
              ? styles.estilTargetaSeleccionada
              : styles.estilTargeta
          }
          elevation={4}>
          <Text>{titol}</Text>
          <Text style={styles.sectionDescription}>{descripcio}</Text>
        </Surface>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  estilTargeta: {
    width: Dimensions.get('window').width / 3,
    margin: 5,
    padding: 3,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 9,
  },
  sectionDescription: {
    fontSize: 14,
    fontWeight: '400',
    flexWrap: 'wrap',
  },
  estilTargetaSeleccionada: {
    width: Dimensions.get('window').width / 3,
    margin: 5,
    padding: 3,
    borderColor: 'black',
    borderRadius: 9,
    borderWidth: 3,
    backgroundColor: '#9933FF',
  },
});
export default UnCicle;
