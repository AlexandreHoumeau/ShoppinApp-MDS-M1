import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

const RegisterModal = ({ navigation }) => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.6)",
    }}
  >
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 5,
        alignItems: "center",
        padding: 40,
      }}
    >
      <Text style={{ color: "#764abc", fontWeight: "bold", fontSize: 20 }}>
        Great your account was created !
      </Text>
      <Text style={{ color: "#585858", fontWeight: "300", fontSize: 15 }}>
        You can now loggin
      </Text>
      <Button
        style={{ marginTop: 30 }}
        contentStyle={{ padding: 10, paddingHorizontal: 30 }}
        mode="contained"
        onPress={() => navigation.navigate("Login")}
      >
        Go to login
      </Button>
    </View>
  </View>
);

export default RegisterModal;
