import React from "react";
import { A, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Terms = () => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.textStyle}>
        로그인 하시면{" "}
        <Text style={{ textDecorationLine: "underline" }}>
          개인정보처리방침
        </Text>{" "}
        및 <Text style={{ textDecorationLine: "underline" }}>이용약관</Text>,
        {`\n`}
        그리고 저희의 더 나은 서비스 제공을 위한{" "}
        <Text style={{ textDecorationLine: "underline" }}>연구정책</Text>에
        동의하는 것으로 간주합니다.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: { marginTop: 60, width: "80%" },
  textStyle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default Terms;
