import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';

const ModalEditarProfes = props => {
  const [nom, setNom] = useState(null);
  const [modul, setModul] = useState(null);
  const [nomCompletModul, setNomCompletModul] = useState(null);
  const hores = null;

  return (
    <View>
      <View>
        <Text>Informacio Profe:</Text>
        <TextInput value={nom} onChangeText={text => setNom(text)}></TextInput>
        <TextInput
          value={modul}
          onChangeText={text => setModul(text)}></TextInput>
        <TextInput
          value={nomCompletModul}
          onChangeText={text => setNomCompletModul(text)}></TextInput>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Button onPress={() => props.Cancelar()}>Cancelar</Button>
        <Button>Cambiar</Button>
      </View>
    </View>
  );
};

export default ModalEditarProfes;
