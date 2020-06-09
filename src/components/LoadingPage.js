import React from "react";
import { Text, View, StyleSheet, Button, ImageBackground } from "react-native";
import LogoImage from "./LogoImage";

const LoadingPage = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/backgroundImg.png")}
        style={{
          width: "100%",
          resizeMode: "cover",
          flex: 1,
          alignItems: "center",
        }}
      >
        <Text style={styles.textStyle}>
          <Text style={{ color: "#00cec9" }}>준비중</Text>입니다. {`\n`}잠시만
          기다려 주세요 :)
        </Text>
        <LogoImage style={styles.logoStyle} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginTop: 100,
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "600",
  },
  logoStyle: {
    marginTop: 350,
    width: 150,
    height: 150,
  },
});

export default LoadingPage;
