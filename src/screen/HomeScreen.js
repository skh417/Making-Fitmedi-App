import React from "react";
import { View, Text, StyleSheet, Button, ImageBackground } from "react-native";
import LoginButtons from "../components/LoginButtons";
import Terms from "../components/Terms";
import LogoImage from "../components/LogoImage";

//제발 navigation , navigator, navigate 철자 구분 좀 잘 하자 ㅅㅂ..
const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ImageBackground
        source={require("../../assets/backgroundImg.png")}
        style={{
          width: "100%",
          resizeMode: "cover",
          flex: 1,
          alignItems: "center",
        }}
      >
        {/* <Text>this is homescreen</Text> */}
        <LogoImage style={styles.logoStyle} />
        <Text style={styles.mainTextStyle}>
          {`지금 회원 가입하고
`}
          <Text style={styles.coloredText}>맞춤형 운동관리</Text>를 받아보세요!
        </Text>

        {/* 밑에 버튼 나중에 지울 것! */}
        <Button
          title='만들고 있는 페이지'
          onPress={() => {
            navigation.navigate("Welcome");
            console.log(navigation);
          }}
        />
        <LoginButtons navi={navigation.navigate} />
        <Terms />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
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
