import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LogoImage from "../components/LogoImage";

const WelcomeScreen = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Text style={styles.textStyle}>
        근골격계
        {`\n`}
        운동관리
        {`\n`}
        <Text style={{ color: "#00cec9" }}>피트매디</Text>
      </Text>
      <View style={{ marginTop: 220 }}>
        <LogoImage style={styles.logoStyle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#b2bec3",
    height: "100%",
    alignItems: "center",
  },
  textStyle: {
    marginTop: 50,
    color: "white",
    fontSize: 80,
    fontWeight: "500",
  },
  logoStyle: {
    width: 150,
    height: 150,
  },
});

export default WelcomeScreen;
