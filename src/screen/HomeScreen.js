import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import LoginButtons from "../components/LoginButtons";
import Terms from "../components/Terms";
import LogoImage from "../components/LogoImage";

//제발 navigation , navigator, navigate 철자 구분 좀 잘 하자 ㅅㅂ..

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.backgroundStyle}>
      {/* <Text>this is homescreen</Text> */}
      <LogoImage style={styles.logoStyle} />
      <Text style={styles.mainTextStyle}>
        {`지금 회원 가입하고
`}
        <Text style={styles.coloredText}>맞춤형 운동관리</Text>를 받아보세요!
      </Text>

      {/* 밑에 버튼 나중에 지울 것! */}
      <Button
        title='로그인 했을 경우 !'
        onPress={() => navigation.navigate("Welcome")}
      />
      <LoginButtons />
      <Terms />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#b2bec3",
    height: "100%",
    alignItems: "center",
  },
  mainTextStyle: {
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    color: "white",
    marginTop: 10,
    marginBottom: 30,
  },
  coloredText: {
    color: "#00cec9",
  },
  imgContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 50,
  },
  logoStyle: {
    width: 200,
    height: 200,
  },
});

export default HomeScreen;
