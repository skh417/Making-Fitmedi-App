import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableHighlight,
} from "react-native";
import LogoImage from "../components/LogoImage";

const WelcomeScreen = () => {
  const [camera, setCamera] = useState(true);

  return (
    <View style={styles.backgroundStyle}>
      <Modal
        animationType='fade'
        visible={camera}
        transparent={true}
        presentationStyle={"overFullScreen"}
      >
        <View style={styles.centeredModal}>
          <View style={styles.modalViewStyle}>
            <Text style={styles.modalTextStyle}>
              카메라 사용을 {`\n`}허용하시겠습니까?
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableHighlight
                onPress={() => setCamera(!camera)}
                style={styles.buttonStyle}
              >
                <Text style={{ fontSize: 20, color: "white" }}>취소</Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => setCamera(!camera)}
                style={{ ...styles.buttonStyle, backgroundColor: "#00cec9" }}
              >
                <Text style={{ fontSize: 20, color: "white" }}>허용</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>

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
  centeredModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalViewStyle: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
  modalTextStyle: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  },
  buttonStyle: {
    alignItems: "center",
    width: 140,
    margin: 5,
    padding: 14,
    borderStyle: "solid",
    borderRadius: 30,
    backgroundColor: "#636e72",
  },
});

export default WelcomeScreen;
