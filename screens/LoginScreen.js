import React, { memo, useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
// import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../utils/theme";
import { emailValidator, passwordValidator } from "../utils/utils";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import SubText from "../components/SubText";

const LoginScreen = () => {
  const navigation = useNavigation(); 

  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    navigation.navigate("Dashboard");
  };

  return (
    <>
      <View style={styles.loginContainer}>
        <View>
          <Header>Welcome back</Header>
          <SubText>
            Please fill in your details to log into your account
          </SubText>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputTextContainer}
            placeholder="Louis04real@gmail.com"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            value={email.value}
            onChangeText={(text) => setEmail({ value: text, error: "" })}
            error={!!email.error}
            errorText={email.error}
            autoCompleteType="email"
            textContentType="emailAddress"
          />
          <TextInput
            style={styles.inputTextContainer}
            placeholder="Password"
            keyboardType="visible-password"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: "" })}
            error={!!password.error}
            errorText={password.error}
            secureTextEntry
          />
        </View>

        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPasswordScreen")}
          >
            <Text style={styles.label}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <SecondaryButton
              onPress={() => navigation.navigate("RegisterScreen")}
            >
              Sign Up
            </SecondaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={_onLoginPressed}>Login</PrimaryButton>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: theme.colors.accent,
    padding: 20,
  },
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  label: {
    color: theme.colors.primary,
    fontWeight: "bold",
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
});

export default memo(LoginScreen);
