import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const Login = () => {
  const [ra, setRa] = useState("");
  const [password, setPassword] = useState("");
  const logo = require("../../icons/Logo.png");

  const handleLogin = () => {
    console.log("RA:", ra);
    console.log("Password:", password);
  };
  const handleRegister = () => {
    console.log("send to register page");
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={[styles.title, styles.textShadow]}>Login</Text>
      <TextInput
        style={[styles.input, styles.shadow]}
        placeholder="RA do aluno"
        value={ra}
        keyboardType="numeric"
        onChangeText={(ra) => setRa(ra.replace(/[^0-9]/g, ""))}
      />
      <TextInput
        style={[styles.input, styles.shadow]}
        placeholder="Senha"
        value={password}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={[styles.button, styles.shadow]}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.textShadow}>Não possui uma conta? Crie agora!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 225,
    height: 225,
    marginBottom: 0,
  },
  title: {
    fontSize: 36,
    marginBottom: 40,
  },
  input: {
    color: "black",
    backgroundColor: "#D9D9D9",
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 35,
    width: 275,
    marginVertical: 10,
    fontSize: 14,
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
  shadow: {
    shadowColor: "black",
    elevation: 5,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  textShadow: {
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 8,
  },
});

export default Login;
