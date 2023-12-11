import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Avatar, Surface, Badge} from 'react-native-paper';

const InformacioProfesCicle = ({foto, modul, nom, horesSetmanals}) => {
  return (
    <View style={{flex: 1}}>
      <Surface style={styles.estilTargeta} elevation={4}>
        <View style={{flex: 0.7}}>
          <Image
            source={require('../assets/prueba.jpg')}
            style={styles.imagen}
          />
        </View>
        {/* Tot el text */}
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
              <Text style={{margin: 5, fontWeight: 'bold', color: '#6F3F87'}}>
                {modul}
              </Text>
            </View>
            <View style={{flex: 0.8, justifyContent: 'center'}}>
              <Avatar.Icon style={{margin: 5}} size={30} icon={foto} />
            </View>
            <View>
              <Badge size={23}>{horesSetmanals}</Badge>
            </View>
          </View>
          <Text style={{textAlign: 'center'}}>{nom}</Text>
          {/* <Text>Hores setmanals: {horesSetmanals}</Text> */}
        </View>
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
  imagen: {
    flex: 1,
    width: null,
    height: null,
  },
});
export default InformacioProfesCicle;
