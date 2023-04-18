import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Ionicons } from '@expo/vector-icons';

export default function App() {

  const [texto, setTexto] = useState('AINDA NÃO É USUARIO ?');
  const [login, setLogin] = useState();
  const [senha, setSenha] = useState();
  const [ativar, setAtivar] = useState(true);


  const clicarBotao = () => {
    setAtivar(!ativar);

    if (ativar == false) {
      setTexto('Ainda não é usuario ?')

    } else if (ativar == true) {
      setTexto('')

    }
  }
  return (

    <View style={styles.container}>


      <Text style={styles.boldText}>VOCÊ MAIS SEGURA!!!</Text>

      <View style={styles.logoContainer}>
        <Ionicons name="flower-outline" size={64} color="#8c4f4d" />
      </View>

      <View style={styles.quadrado}>



        <Text style={styles.login}>LOGIN:</Text>


        <View style={styles.cxicone}>
          <MaterialCommunityIcons name="email-newsletter" size={24} color="black" />


          <TextInput
            multiline
            style={styles.input}
            placeholder='Enter your login'
            onChangeText={setLogin}


          />
        </View>

        <Text style={styles.senha}>SENHA:</Text>

        <View style={styles.cxicone}>
          <Entypo name="key" size={24} color="black" />
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            placeholder="Enter your password"
            onChangeText={setSenha}



          />
        </View>

        <View style={styles.botao1}>
          <Button
            title='ENTRAR'
            color='white'
          />
        </View>

        <View style={styles.botao}>
          <Button title={texto} onPress={clicarBotao}
            color='black' />
        </View>

        {
          ativar ?
            <Text> </Text>

            :

            <View style={styles.view1}>

              <Text style={styles.texto1}>ENCAMINHANDO PARA TELA DE CADASTRO.  </Text>

            </View>

        }
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },

  boldText: {
    position: 'absolute',
    top: 100,
    left: 110,
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    marginTop: 50,

  },

  logoContainer: {

    position: 'absolute',
    top: 100,
    left: 40,
    justifyContent: 'center',
    marginVertical: 30,
    marginRight: 300,
    marginTop: 30,

  },

  input: {

    padding: 5,
    margin: 1,
    width: 200,

  },

  botao: {
    marginTop: 20,

  },
  botao1: {
    marginTop: 20,
    backgroundColor: '#8c4f4d',
  },

  cxicone: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 10,
    width: '50%',
    borderRadius: 10,
    marginTop: 15,
  },

  senha: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',

  },

  texto1: {
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },

  login: {

    fontSize: 20,
    fontWeight: 'bold',

  },

  quadrado: {
    marginTop: 20,
    padding: 40,
    backgroundColor: 'white',
    borderRadius: 50,
  }

});
