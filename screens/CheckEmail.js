import React, { memo } from "react";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { emailValidator } from "../utils/utils";
import { theme } from "../utils/theme";
import SubText from "../components/SubText";
import Animation from "../components/Animation";

const CheckEmail = () => {
  const navigation = useNavigation();

  function nextHandler() {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.loginContainer}>
      {/* Animation */}
      <Animation />
      <View style={styles.contentContainer}>
      <Header>Your email will soon arrive</Header>
      <SubText>
        Check your email mail@mail.com and follow the instructions to reset your
        password
      </SubText>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextHandler}>Continue</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default CheckEmail;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: theme.colors.accent,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    // flex: 1,
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
