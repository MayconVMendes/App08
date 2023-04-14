import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
  Image,
  Switch,
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={{ marginTop: '25%', fontSize: 30 }}>Anúncios</Text>
      <ScrollView style={styles.scrol} horizontal={true}>
        <View style={styles.box}>
          <Image
            source={{
              uri: 'https://www.dorcronica.blog.br/web/wp-content/uploads/2022/09/o-indice-de-massa-corporal-imc-e-impreciso-e-enganoso.png',
            }}
            style={{ width: 100, height: 100 }}
          />

          <Text>
            Olha o perigoso
          </Text>
        </View>

        <View style={styles.box}>
          <Image
            source={{
              uri: 'https://extra.globo.com/incoming/23044728-586-bf3/w448h673-PROP/bambam.jpg',
            }}
            style={{ width: 100, height: 100 }}
          />

          <Text>
            "É o mutante por@@""
          </Text>
        </View>

        <View style={styles.box}>
          <Image
            source={{
              uri: 'https://blog-energia-do-corpo.b-cdn.net/wp-content/uploads/2018/01/162318-vem-monstro-conheca-leo-stronda-e-como-ele-chegou-no-corpo-de-hoje.jpg',
            }}
            style={{ width: 100, height: 100 }}
          />

          <Text>
            "Ta saindo da jaula o monstro, Birl"
          </Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrol: {
    width: '69%',
    height: 200,
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    padding: 15,
  },

  box: {
    width: 110,
    height: 100,
    marginLeft: 10,
    marginRight: 10,
  },
});
