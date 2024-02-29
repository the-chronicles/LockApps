import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { theme } from "./utils/theme";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: theme.colors.accent },
            headerTintColor: "#000000",
            headerShadowVisible: false,
            sceneContainerStyle: { backgroundColor: theme.colors.error },
            headerTitle: "Login",
            headerTitleStyle: {
              // fontFamily: "gilroy",
              fontSize: 16,
            },
            headerTitleAlign: "center",
            headerBackVisible: true,
            headerBackTitle: 'back'
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          {/* <Stack.Screen
            name="Login"
            component={LoginScreen}
          /> */}
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
