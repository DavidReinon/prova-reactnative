import React from 'react';
import {Provider as PaperProvider, TextInput} from 'react-native-paper';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const nom = textAMostrar => {
  return <Text style={{fontSize: 30}}>{textAMostrar}</Text>;
};
const dades = array => {
  return array.map(unElement => {
    <TextInput label={unElement} placeholder={unElement}></TextInput>;
  });
};
let titulos = ['Email', 'Nom'];
const App = () => {
  return (
    <PaperProvider>
      {nom('David Reinon')};{dades(titulos)};
    </PaperProvider>
  );
};

export default App;
