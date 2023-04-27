import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";

const homeIcon = require("../icons/Home.png");
const PrincipalIcon = require("../icons/Principal.png");
const userIcon = require("../icons/Perfil.png");

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, styles.leftButton]}>
        <Image source={homeIcon} style={styles.buttonImage} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.centerButton]}>
        <Image source={PrincipalIcon} style={styles.buttonImage} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.rightButton]}>
        <Image source={userIcon} style={styles.buttonImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FF2B2B",
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  button: {
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  leftButton: {
    marginLeft: 10
  },
  rightButton: {
    marginRight: 10
  },
  centerButton: {
    borderWidth: 1,
    borderColor: "#FF2B2B",
    backgroundColor: "#FFFFFF",
    marginTop: -50
  },
  buttonImage: {
    width: 30,
    height: 30
  }
});

export default Footer;
