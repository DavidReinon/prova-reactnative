import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-paper';
import InformacioProfesCicle from './InformacioProfesCicle';

const LlistatProfesCicle = ({cicleSeleccionat, dades}) => {
  // console.log(cicleSeleccionat);
  const [cursSeleccionat, setCursSeleccionat] = useState(0);
  return (
    <View style={{flex: 1, flexDirection: 'column', flexWrap: 'wrap', borderColor: 'black', borderWidth: 2}}>
      {cicleSeleccionat !== null ? (
        dades.unitatTics[cicleSeleccionat].curs[cursSeleccionat].profes.map(
          (unProfe, index) => {
            if (!unProfe) {
              return null;
            }
            return (
              <View
                key={index}
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  // borderColor: 'blue',
                  // borderWidth: 1,
                }}>
                <InformacioProfesCicle
                  foto={unProfe.foto}
                  modul={unProfe.modul}
                  horesSetmanals={unProfe.horesSetmanals}
                  nom={unProfe.nom}
                />
              </View>
            );
          },
        )
      ) : (
        <Text>
          Selecciona un cicle. Sempre es visualitzaran el profes de 1r curs.
        </Text>
      )}
    </View>
  );
};
export default LlistatProfesCicle;
