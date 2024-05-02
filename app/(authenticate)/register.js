import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign ,Ionicons} from "@expo/vector-icons";
import { useRouter, } from "expo-router";
import axios from "axios";

const register = () => {
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleRegister = () => {
      const user = { 
          name:name,
          email:email,
          password:password
      }

      axios.post("http://192.168.1.2:3000/register",user).then((response) => {
          console.log(response);
          Alert.alert("Registro realizado com sucesso","Você foi registrado com sucesso");
          setEmail("");
          setPassword("");
          setName("");
      }).catch((error) => {
          Alert.alert("Falha no registro","ocorreu um erro durante o registro");
          console.log("error",error)
      })
  }
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#736bff", alignItems: "center" }}
    >
      <View style={{ marginTop: 80 }}>
        <Text style={{ fontSize: 18, fontWeight: "600", color: "black" }}>
          LISTA DE TAREFAS
        </Text>
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 20, color:"white" }}>
          cadastre-se em sua conta
          </Text>
        </View>

        <View style={{ marginTop: 70 }}>

        <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "white",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <Ionicons style={{marginLeft:8}} name="person" size={24} color="black" />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 17 : 17,
              }}
              placeholder="digite seu nome"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "white",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="black"
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: "white",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 17 : 17,
              }}
              placeholder="digite seu email"
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "white",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <AntDesign
              style={{ marginLeft: 8 }}
              name="lock1"
              size={24}
              color="black"
            />
            <TextInput
              value={password}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              style={{
                color: "black",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 17 : 17,
              }}
              placeholder="digite sua senha"
            />
          </View>


          <View style={{ marginTop: 60 }} />

          <Pressable
          onPress={handleRegister}
            style={{
              width: 200,
              backgroundColor: "black",
              padding: 15,
              borderRadius: 6,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Cadatrar
            </Text>
          </Pressable>

          <Pressable onPress={() => router.replace("/login")} style={{ marginTop: 15 }}>
            <Text style={{ textAlign: "center", fontSize: 15, color: "white" }}>
            já tem uma conta? inscrever-se
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default register;

const styles = StyleSheet.create({});