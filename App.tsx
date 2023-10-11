/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';

import {Button, TextInput} from 'react-native-paper';

const App = () => {
  const [text, setText] = useState('');
  return (
    <View>
      <Text style={styles.sectionTitle}>Texto Inicial</Text>
      <TextInput
        label="Email"
        value={text}
        onChangeText={element => setText(element)}
      />
      <Button mode="text" icon="alien">
        1
      </Button>
      <Button mode="outlined" icon="alien">
        2
      </Button>
      <Button mode="contained" icon="alien">
        3
      </Button>
      <Button mode="elevated" icon="alien">
        4
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
