import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import Tools from "./Tools";

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// function AllAppsStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={AllApps} />
//       <Stack.Screen name="Tools" component={Tools} />
//     </Stack.Navigator>
//   );
// }

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={AllAppsStack} />
//       <Tab.Screen name="Tools" component={Tools} />
//       {/* <Tab.Screen name="Tools" component={Tools} /> */}
//     </Tab.Navigator>
//   );
// }

function AllApps() {
  return (
    <View>
      <Text>HI</Text>
    </View>
  );
}

export default AllApps;
