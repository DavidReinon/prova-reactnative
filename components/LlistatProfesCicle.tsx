import React from 'react';
import {View, Text, FlatList} from 'react-native';
import InformacioProfesCicle from './InformacioProfesCicle';

const LlistatProfesCicle = ({cicleSeleccionat, dades, cursSeleccionat}) => {
  if (cicleSeleccionat !== null) {
    if (
      dades.unitatTics[cicleSeleccionat].curs[cursSeleccionat - 1] === undefined
    ) {
      cursSeleccionat = 1;
    }
  }

  return (
    <View>
      {cicleSeleccionat !== null ? (
        <FlatList
          data={
            dades.unitatTics[cicleSeleccionat].curs[cursSeleccionat - 1].profes
          }
          keyExtractor={(item, index) => item.nom + ' - ' + index.toString()}
          renderItem={({item}) => (
            <InformacioProfesCicle
              foto={item.foto}
              modul={item.modul}
              horesSetmanals={item.horesSetmanals}
              nom={item.nom}
            />
          )}></FlatList>
      ) : (
        // dades.unitatTics[cicleSeleccionat].curs[cursSeleccionat - 1].profes.map(
        //   (unProfe, index) => {
        //     return (
        //       <View
        //         key={index}
        //         style={{
        //           flex: 1,
        //           flexDirection: 'row',
        //           // borderColor: 'blue',
        //           // borderWidth: 1,
        //         }}>
        //         <InformacioProfesCicle
        //           foto={unProfe.foto}
        //           modul={unProfe.modul}
        //           horesSetmanals={unProfe.horesSetmanals}
        //           nom={unProfe.nom}
        //         />
        //       </View>
        //     );
        //   },
        // )
        <Text>
          Selecciona un cicle. Sempre es visualitzaran el profes de 1r curs.
        </Text>
      )}
    </View>
  );
};
export default LlistatProfesCicle;
