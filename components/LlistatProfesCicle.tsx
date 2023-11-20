import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-paper';

const LlistatProfesCicle = ({cicleSeleccionat, dades}) => {
  if (cicleSeleccionat === undefined) cicleSeleccionat = 1;
  return (
    <View>
      {dades.unitatTics[cicleSeleccionat].curs[0].profes.map(element => {
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Avatar.Icon size={24} icon={element.foto}></Avatar.Icon>
          <Text>{element.nom}</Text>;
        </View>;
      })}
    </View>
  );
};
export default LlistatProfesCicle;
