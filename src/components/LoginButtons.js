import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const LoginButtons = () => {
  const platforms = [
    "카카오톡 로그인",
    "구글 로그인",
    "페이스북 로그인",
    "애플 로그인",
  ];
  return (
    <View style={styles.listStyle}>
      <FlatList
        scrollEnabled={false}
        keyExtractor={(item) => {
          platforms.indexOf(item);
        }}
        data={platforms}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.buttonStyle}>
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    width: "100%",
    alignItems: "center",
  },
  buttonStyle: {
    width: "100%",
    marginBottom: 10,
    padding: 10,
    fontSize: 20,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 24,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 5,
    paddingBottom: 5,
  },
});

export default LoginButtons;
