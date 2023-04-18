import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {

  const [pessoas, setPessoas] = useState([
    { nome: "Segurança Pessoal Feminina(SPF)", key: "1" },
    { nome: "Recursos de Emergência", key: "2" },
    { nome: "Adicionar localização em tempo real", key: "3" },
    { nome: "Tutoriais de Segurança", key: "5" },
    { nome: "Recursos de segurança personalizados", key: "6" },
    { nome: "Alertas", key: "7" },
    { nome: "Suporte", key: "8" },
  ]);
  const [dados, setDados] = useState([
    { dado: "Meus Dados", key: "1" },
    { dado: "Recursos Utilizados", key: "2" },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.iconeContainer}>
        <MaterialCommunityIcons name="face-woman" size={60} color="#8c4f4d" />
        <Text style={styles.boldText}>Recursos do Usuário</Text>
      </View>

      <View style={styles.quadrado}>
        <FlatList
          numColumns={2}
          keyExtractor={(item) => item.key}
          data={dados}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.caixaContainer}>
              <Text style={styles.item}>{item.dado || item.dado}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <ScrollView>
        {pessoas.map((item) => (
          <View key={item.key} style={styles.itemContainer}>
            <Text style={styles.item}>{item.nome}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 10,
    marginTop: 160,

  },
  itemContainer: {
    height: 130,
    backgroundColor: "#8c4f4d",
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    borderRadius: 20,
  },
  item: {
    fontSize: 18,
    color: "white",
  },
  iconeContainer: {
    position: "absolute",
    top: -150,
    left: 1,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
    marginRight: 100,
    flexDirection: "row",
  },
  boldText: {
    marginTop: 20,
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 19,
    color: "#8c4f4d",

  },
  quadrado: {
    marginTop: 10,
    backgroundColor: "#f4dde7",
    borderRadius: 50,
    padding: 20,
    top: -50,
  },
  caixaContainer: {
    backgroundColor: "#8c4f4d",
    height: 80,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    padding: 10,
  }
});



