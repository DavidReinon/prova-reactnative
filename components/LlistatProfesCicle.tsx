import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-paper';

const LlistatProfesCicle = ({cicleSeleccionat, dades}) => {
  console.log(cicleSeleccionat);
  return (
    <View>
      {cicleSeleccionat !== null ?
        dades.unitatTics[cicleSeleccionat].curs[0].profes.map(
          (element, index) => {
            if (!element) {
              return null;
            }
            return (
              <View
                key={index}
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Avatar.Icon size={30} icon={element.foto} />
                {element.nom && <Text>{element.nom}</Text>}
              </View>
            );
          },
        ) : <Text>Selecciona un cicle. Sempre es visualitzaran el profes de 1r curs.</Text>}
    </View>
  );
};
export default LlistatProfesCicle;
