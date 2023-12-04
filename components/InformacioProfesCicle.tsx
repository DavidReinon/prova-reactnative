import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, Surface} from 'react-native-paper';

const InformacioProfesCicle = ({foto, modul, nom, horesSetmanals}) => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <Surface style={styles.estilTargeta} elevation={4}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            borderColor: 'black',
            borderWidth: 2,
          }}>
          <Text style={{margin: 5}}>{modul}</Text>
          <Avatar.Icon style={{margin: 5}} size={30} icon={foto} />
        </View>
        <Text>{nom}</Text>
        <Text>Hores setmanals: {horesSetmanals}</Text>
      </Surface>
    </View>
  );
};
const styles = StyleSheet.create({
  estilTargeta: {
    flex: 1,
    margin: 5,
    padding: 3,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 9,
  },
});
export default InformacioProfesCicle;
