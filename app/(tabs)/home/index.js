import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { SlideAnimation } from "react-native-modals";
import { ModalTitle } from "react-native-modals";

const index = () => {
  const todos = [];
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#736bff",
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 25,
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Tudo</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#736bff",
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 25,
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Trabalho</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#736bff",
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 25,
            alignContent: "center",
            justifyContent: "center",
            marginRight: "auto",
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Pessoal</Text>
        </Pressable>
        <Pressable>
          <AntDesign name="pluscircle" size={30} color="#736bff" />
        </Pressable>
      </View>

      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ padding: 10 }}>
          {todos.length > 0 ? (
            <View></View>
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 130,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Image
                style={{ width: 200, height: 200, resizeMode: "contain" }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/2387/2387679.png",
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 15,
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                Sem Tarefas para hoje! adicione uma nova tarefa
              </Text>
              <Pressable style={{ marginTop: 15 }}>
                <AntDesign name="pluscircle" size={30} color="#736bff" />
              </Pressable>
            </View>
          )}
        </View>
      </ScrollView>

     
    </>
  );
};

export default index;

const styles = StyleSheet.create({});

//<ScrollView style={{ flex: 1, backgroundColor: "#736bff" }}>
