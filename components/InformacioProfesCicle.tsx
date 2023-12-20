import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  Avatar,
  Surface,
  Badge,
  TouchableRipple,
  Provider as PaperProvider,
  Portal,
  Modal,
} from 'react-native-paper';
import ModalEditarProfes from './ModalEditarProfes';

const InformacioProfesCicle = ({foto, modul, nom, horesSetmanals}) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const cancelar = () => {
    hideModal();
  };

  return (
    <TouchableRipple rippleColor="violet" onPress={() => showModal()}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 0.1, flexDirection: 'column'}}>
          <Avatar.Image
            style={{margin: 3}}
            size={30}
            source={require('../assets/IconPapelera.png')}
          />
          <Avatar.Image
            style={{margin: 3}}
            size={30}
            source={require('../assets/IconPencil.png')}
          />
        </View>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Surface style={styles.estilTargeta} elevation={4}>
            {/* Imatge */}
            <View style={{flex: 0.7}}>
              <Image
                source={require('../assets/logo.png')}
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
                  <Text
                    style={{
                      margin: 5,
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: '#6F3F87',
                    }}>
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
              <Text style={{textAlign: 'center', fontSize: 17}}>{nom}</Text>
            </View>
          </Surface>
        </View>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={styles.modalStyle}>
            <ModalEditarProfes Cancelar={cancelar}></ModalEditarProfes>
          </Modal>
        </Portal>
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  estilTargeta: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    padding: 3,
    borderColor: 'black',
    borderRadius: 9,
  },
  imagen: {
    flex: 0.8,
    resizeMode: 'contain',
    width: null,
    height: null,
  },
  modalStyle: {flex: 0.8, backgroundColor: 'white', padding: 20},
});

export default InformacioProfesCicle;
