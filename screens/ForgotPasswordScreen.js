import React, { memo, useState } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { emailValidator } from "../utils/utils";
import Header from "../components/Header";
import { theme } from "../utils/theme";
import { useNavigation } from "@react-navigation/native";
import SubText from "../components/SubText";
import PrimaryButton from "../components/PrimaryButton";

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState({ value: "", error: "" });

  function nextHandler ()  {
    navigation.navigate("SetPassword");
  }

  // const _onSendPressed = () => {
    // const emailError = emailValidator(email.value);

    // if (emailError) {
    //   setEmail({ ...email, error: emailError });
    //   return;
    // }

    // navigation.navigate("SetPassword");
  // };

  return (
    <View style={styles.loginContainer}>
      <View>
        <Header>
          Enter your email and we'll send you a link to reset your password.
        </Header>
        <SubText>
          We all can make mistakes. Let's help you get back into your account.
          Please your email below
        </SubText>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextHandler}>Continue</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: theme.colors.accent,
    padding: 20,
  },
  inputContainer: {
    marginTop: 32,
    marginBottom: 20,
    gap: 20,
  },
  inputTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderWidth: 1,
    borderColor: theme.colors.secondary,
    borderRadius: 30,
    backgroundColor: "white",
  },
  back: {
    width: "100%",
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: "100%",
  },

  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default ForgotPasswordScreen;
