import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native";

const LoginButtons = (props) => {
  const platforms = [
    { key: "로그인 완료(테스트)" },
    { key: "카카오톡 로그인" },
    { key: "구글 로그인" },
    { key: "페이스북 로그인" },
    { key: "애플 로그인" },
  ];

  const moveToNext = (key) => {
    // console.log(key);
    // console.log(props.navi);
    if (key === "로그인 완료(테스트)") {
      console.log("ok!");
      props.navi("LoadingPage");
    }
  };

  return (
    <View style={styles.listStyle}>
      <FlatList
        scrollEnabled={false}
        keyExtractor={(item) => {
          platforms.indexOf(item.key);
        }}
        data={platforms}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => moveToNext(item.key)}
            >
              <Text style={styles.buttonText}>{item.key}</Text>
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
