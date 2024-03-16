import { AppRegistry, SafeAreaView } from "react-native";
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
import SetPassword from "./screens/SetPassword";
import ResetConfirmation from "./screens/ResetConfirmation";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AllApps from "./screens/AllApps";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tools from "./screens/Tools";
import Premium from "./screens/Premium";
import Settings from "./screens/Settings";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Unlocked from "./screens/Unlocked";
import Locked from "./screens/Locked";
import { SafeAreaContext } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function AuthStack() {
  return (
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
      <Stack.Screen
        name="SignUp"
        component={SignupScreen}
        options={{
          headerTitle: "Sign Up",
          headerTitleStyle: {
            // fontFamily: "gilroy",
            fontSize: 16,
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{
          headerTitle: "Forgot Password",
          headerTitleStyle: {
            // fontFamily: "gilroy",
            fontSize: 16,
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="CheckEmail"
        component={CheckEmail}
        options={{
          headerTitle: "Check Mail",
          headerTitleStyle: {
            // fontFamily: "gilroy",
            fontSize: 16,
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="SetPassword"
        component={SetPassword}
        options={{
          headerTitle: "Set Password",
          headerTitleStyle: {
            // fontFamily: "gilroy",
            fontSize: 16,
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="ResetConfirmPass"
        component={ResetConfirmation}
        options={{
          headerTitle: "Confirmed",
          headerTitleStyle: {
            // fontFamily: "gilroy",
            fontSize: 16,
          },
          headerTitleAlign: "center",
        }}
      />
      {/* <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.primary },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "white" },
        drawerContentStyle: { backgroundColor: "white" },
      }}
    >
      {/* <Drawer.Screen name="AllApps" component={TabNavigator} /> */}
      {/* <Drawer.Screen name="AllApps" component={AllApps} /> */}
      <Drawer.Screen name="AllApps" component={TopNavigator} />
    </Drawer.Navigator>
  );
}

function TopNavigator() {
  return (
    <TopTab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: theme.colors.primary,
        tabBarIndicatorStyle: {
          height: null,
          top: "10%",
          bottom: "10%",
          width: "45%",
          left: "2.5%",
          borderRadius: 8,
          backgroundColor: theme.colors.primary,
        },
        tabBarStyle: {
          alignSelf: "center",
          width: "100%",
          // borderRadius: 8,
          borderColor: theme.colors.primary,
          backgroundColor: theme.colors.secondary,
          // margin: 8,
          elevation: 0,
        },
        tabBarItemStyle: {
          borderRadius: 8,
          margin: 2,
        },
        // tabBarGap: 10,
      })}
      swipeEnabled={true}
    >
      <TopTab.Screen name="Unlocked" component={Unlocked} />
      <TopTab.Screen name="Locked" component={Locked} />
    </TopTab.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          height: 80,
        },
        tabBarInactiveTintColor: theme.colors.secondary200,
        tabBarLabelStyle: { height: 30 },
      }}
    >
      <Tab.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
          title: "All Apps",
          tabBarLabel: "All Apps",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="appstore1" size={size} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Home"
        component={AllApps}
        options={{
          title: "All Apps",
          tabBarLabel: "All Apps",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="appstore1" size={size} color={color} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Tools"
        component={Tools}
        options={{
          // title: 'Home',
          // tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="tools" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Premium"
        component={Premium}
        options={{
          title: "Premium",
          tabBarLabel: "Premium",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="diamond-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Settings",
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-sharp" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: theme.colors.primary },
//         headerTintColor: "white",
//         sceneContainerStyle: { backgroundColor: "white" },
//         drawerContentStyle: { backgroundColor: "white" },
//       }}
//     >
//       {/* <Drawer.Screen name="AllApps" component={TabNavigator} /> */}
//       <Drawer.Screen name="AllApps" component={AllApps} />
//     </Drawer.Navigator>
//   );
// }

function Navigation() {
  return (
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Navigation />
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
