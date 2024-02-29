import React, { memo } from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  View,
} from "react-native";
import { theme } from "../utils/theme";

type Props = {
  children: React.ReactNode,
};

const Background = ({ children }: Props) => (
  <View style={styles.contain}>
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  </View>
);

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: theme.colors.accent,
  },
  container: {
    flex: 1,
    padding: 60,
    width: "100%",
    // maxWidth: 340,
    // alignSelf: "center",
    alignItems: "flex-start",
    // justifyContent: "center",
  },
});

export default memo(Background);
