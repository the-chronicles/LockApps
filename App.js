import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { theme } from "./utils/theme";
import SignupScreen from "./screens/SignupScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import CheckEmail from "./screens/CheckEmail";
import Animation from "./components/Animation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      {/* <Animation /> */}

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: theme.colors.accent },
            headerTintColor: "#000000",
            headerShadowVisible: false,
            sceneContainerStyle: { backgroundColor: theme.colors.error },
          }}
        >
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerTitle: "Login",
              headerTitleStyle: {
                // fontFamily: "gilroy",
                fontSize: 16,
              },
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen name="SignUp" component={SignupScreen} options={{
            headerTitle: "Sign Up",
            headerTitleStyle: {
              // fontFamily: "gilroy",
              fontSize: 16,
            },
            headerTitleAlign: "center",
          }} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{
            headerTitle: "Forgot Password",
            headerTitleStyle: {
              // fontFamily: "gilroy",
              fontSize: 16,
            },
            headerTitleAlign: "center",
          }} />
          <Stack.Screen name="CheckEmail" component={CheckEmail} options={{
            headerTitle: "Check Mail",
            headerTitleStyle: {
              // fontFamily: "gilroy",
              fontSize: 16,
            },
            headerTitleAlign: "center",
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: 20,
    // margin: 24,
  },
});
