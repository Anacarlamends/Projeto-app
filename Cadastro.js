import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button,} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


export default function App() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");


  const [value, setValue] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  
  useEffect(() => {
    if (value === 'gustavo') {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  }, [value]);

  const Nome = (text) => {
    setNome(text);
  };

  const Email = (text) => {
    setEmail(text);
  };

  const Senha = (text) => {
    setSenha(text);
  };

  const ConfirmSenha = (text) => {
    setConfirmSenha(text);
  };
  const Telefone = (text) => {
    setTelefone(text);
  };

  const Cadastrar = () => {
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Senha:", senha);
    console.log("Telefone:", telefone);

  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Tela De Cadastro</Text>

      <View style={styles.caixinha}>

        <View>

        <Text style={styles.caixa}>Nome</Text>
        <View style={styles.view1}>
          <FontAwesome5 name="user" size={24} color="black" />
          <TextInput
            multiline
            placeholder='Enter your name'
            onChangeText={setValue}
            value={value}
          />
         
          </View>
          {showMessage && (
            <Text style={styles.message}> *nome não está disponivel </Text>
          )}
        </View>

        <Text style={styles.caixa}>E-mail</Text>
        <View style={styles.view1}>
          <MaterialIcons name="email" size={24} color="black" />
          <TextInput
            multiline
            placeholder='Enter your email'
            onChangeText={Email}
            value={email}
          />
        </View>

        <Text style={styles.caixa}>Telefone</Text>
        <View style={styles.view1}>
          <Entypo name="phone" size={24} color="black" />
          <TextInput
            keyboardType='numeric'
            placeholder='Enter your phone number'
            onChangeText={Telefone}
            value={telefone}
            secureTextEntry={true}
          />

        </View>

        <Text style={styles.caixa}>Senha</Text>
        <View style={styles.view1}>
          <Entypo name="key" size={24} color="black" />
          <TextInput
            keyboardType='numeric'
            placeholder='Enter your password'
            onChangeText={Senha}
            value={senha}
            secureTextEntry={true}
          />
        </View>

        <Text style={styles.caixa}>Confirmar Senha</Text>
        <View style={styles.view1}>
          <Entypo name="key" size={24} color="black" />
          <TextInput
            keyboardType='numeric'
            placeholder='Confirm your password'
            onChangeText={ConfirmSenha}
            value={confirmSenha}
            secureTextEntry={true}

          />
        </View>

        <View style={styles.Buttoncontainer}>
          <Button
            title="Cadastrar"
            onPress={Cadastrar}
            color="white"

          />
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4dde7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 40,
    marginTop: 20,
    paddingTop: 20,
    marginVertical: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#8c4f4d',

  },
  view1: {
    borderColor: 'black',
    flexDirection: 'row',
    marginBottom: 2,
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderRadius: 10,
    marginTop: 10,
    fontSize: 16,
  },
  caixa: {
    marginRight: 20,
    marginTop: 10,
  },

  caixinha: {
    marginTop: 20,
    padding: 40,
    backgroundColor: 'white',
    borderRadius: 50,
  },

  Buttoncontainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 300,
    marginTop: 20,
    backgroundColor: '#8c4f4d',
  },

  message: {
  
      color: 'black',
      fontSize: 20,
      fontStyle: 'italic',
      fontWeight: 'bold',
    }
  
});