import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Footer from "../../Comps/Footer";

const Perfil = () => {
  const [nome, setNome] = useState("Luana de Souza");
  const [caronasPegas, setCaronasPegas] = useState("20");
  const [caronasFornecidas, setCaronasFornecidas] = useState("0");
  const [avaliacao, setAvaliacao] = useState("5.0");

  const handleSair = () => {
    console.log("Sair");
  };

  return (
    <View style={{ height: "100%", width: "100%" }}>
      <View style={styles.container}>
        <Image
          source={require("../../icons/userImage.jpg")}
          style={{
            width: 180,
            height: 180,
            borderRadius: 90,
            borderColor: "#FF2B2B",
            borderWidth: 2,
          }}
        />
        <Text style={[styles.title, styles.textShadow]}>{nome}</Text>
        <View style={{ alignContent: "flex-start" }}>
          <View style={[styles.info]}>
            <Image
              source={require("./caronasPegas.png")}
              style={{ width: 90, height: 60 }}
            />
            <View>
              <Text style={[styles.infoTitle, styles.textShadow]}>
                Caronas pegas
              </Text>
              <Text style={[styles.infoData, styles.textShadow]}>
                {caronasPegas}
              </Text>
            </View>
          </View>
          <View style={[styles.info]}>
            <Image
              source={require("./caronasFornecidas.png")}
              style={{
                width: 90,
                height: 90,
              }}
            />
            <View>
              <Text style={[styles.infoTitle, styles.textShadow]}>
                Caronas Fornecidas
              </Text>
              <Text style={[styles.infoData, styles.textShadow]}>
                {caronasFornecidas}
              </Text>
            </View>
          </View>
          <View style={[styles.info]}>
            <Image
              source={require("./avaliacao.png")}
              style={{ width: 64, height: 64, marginRight: 36 }}
            />
            <View>
              <Text style={[styles.infoTitle, styles.textShadow]}>
                Avaliação
              </Text>
              <Text style={[styles.infoData, styles.textShadow]}>
                {avaliacao}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={[styles.quit]} onPress={handleSair}>
          <Image
            source={require("./sair.png")}
            style={{ width: 100, height: 45, marginTop: 20 }}
          />
        </TouchableOpacity>
      </View>
      <Footer></Footer>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
  },
  infoTitle: {
    fontSize: 19,
    color: "#4F4F4F",
  },
  infoData: {
    color: "#FF2B2B",
    fontSize: 50,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    marginBottom: 10,
    marginTop: 40,
  },

  button: {
    backgroundColor: "#FF2B2B",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 35,
    width: 159,
    marginTop: 50,
    marginBottom: 90,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  textShadow: {
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 8,
  },
});

export default Perfil;
