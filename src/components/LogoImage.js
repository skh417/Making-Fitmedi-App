import React from "react";
import { View, Image, StyleSheet } from "react-native";

const LogoImage = (props) => {
  return (
    <View style={styles.imgContainer}>
      <Image
        style={props.style}
        source={{
          uri:
            "https://image.rocketpunch.com/company/120037/fitmedi_logo_1587822233.png?s=400x400&t=inside",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 50,
  },
  logoImage: {
    width: 200,
    height: 200,
  },
});

export default LogoImage;
