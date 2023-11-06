import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const operacion = (pes: number, alçada: number) => {
  // IMC = Peso (kg) / altura (m)2
  return pes / Math.pow(alçada / 100, 2);
};

const comprobarEntraPes = (unPes: Number) => {
  const re = /^[0-9]+\.+$|^[0-9]+$/;
  return re.test(unPes.toString());
};

const messatge = (resultat: number) => {
  let message = '';
  switch (true) {
    case resultat < 18.5:
      message = 'Peso insuficiente';
      break;
    case resultat >= 18.5 && resultat < 25:
      message = 'Normopeso';
      break;
    case resultat >= 25 && resultat < 27:
      message = 'Sobrepeso grado I (preobesidad)';
      break;
    case resultat >= 27 && resultat < 30:
      message = 'Sobrepeso grado II (preobesidad)';
      break;
    case resultat >= 30 && resultat < 35:
      message = 'Obesidad de tipo I';
      break;
    case resultat >= 35 && resultat < 40:
      message = 'Obesidad de tipo II (mórbida)';
      break;
    case resultat >= 40 && resultat < 50:
      message = 'Obesidad de tipo III (mórbida)';
      break;
    default:
      message = 'Obesidad de tipo IV (extrema)';
      break;
  }
  return message;
};

interface Props {
  pes: number;
  alçada: number;
  disabled: boolean;
}

const calcularIMC = (props: Props) => {
  const [colorInfo, setColorInfo] = useState('red');
  const result = operacion(props.pes, props.alçada);
  const message = messatge(result);
  // if (result < 27) setColorInfo('green');
  // if (result > 27 && result < 40) setColorInfo('yellow');

  if (props.disabled) return <View></View>;
  return (
    <View style={styles.textContainer}>
      <Text style={styles.textAlone}>
        El teu índex de massa corporal és: {result.toFixed(2)}
      </Text>
      <Text style={[styles.textAlone, {color: colorInfo}]}>{message}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textContainer: {
    alignSelf: 'center',
    margin: 10,
  },
  textAlone: {
    fontSize: 19,
    alignSelf: 'center',
  },
});
export default calcularIMC;
