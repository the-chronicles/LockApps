import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Button() {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.main}>
        <View>
          <TouchableOpacity style={styles.button}>
            <View style={styles.container}>
              <View style={styles.icon}>
                <Image
                  source={require("../assets/menuadd.png")}
                  style={styles.arrow}
                />
                <Text>Application Settings</Text>
              </View>

              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <View style={styles.container2}>
              <View style={styles.icon}>
                <Ionicons name="settings-outline" size={24} color="black" />
                <Text>My Account Settings</Text>
              </View>

              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <View style={styles.container3}>
              <View style={styles.icon}>
                <Ionicons name="lock-closed-outline" size={24} color="black" />
                <Text>Security</Text>
              </View>

              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.button}>
            <View style={styles.container}>
              <View style={styles.icon}>
                <Feather name="phone-call" size={24} color="black" />
                <Text>Contact Us</Text>
              </View>

              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <View style={styles.container2}>
              <View style={styles.icon}>
                <MaterialIcons name="update" size={24} color="black" />
                <Text>Check for Updates</Text>
              </View>

              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <View style={styles.container3}>
              <View style={styles.icon}>
                <AntDesign name="logout" size={24} color="red" />
                <Text>Log Out</Text>
              </View>

              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default Button;

const styles = StyleSheet.create({
  main: {
    gap: 24,
  },
  container: {
    padding: 16,
    // flex: 1,
    flexDirection: "row",
    height: 72,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    // borderWidth: 0.5,
    // borderColor: "black",
    // borderRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomWidth: 3,
    borderColor: "#eeeeee",
  },
  container2: {
    padding: 16,
    // flex: 1,
    flexDirection: "row",
    height: 72,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    // borderWidth: 0.5,
    // borderColor: "black",
    // borderRadius: 20,
    borderBottomWidth: 3,
    borderColor: "#eeeeee",
  },
  container3: {
    padding: 16,
    // flex: 1,
    flexDirection: "row",
    height: 72,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    // borderWidth: 0.5,
    // borderColor: "black",
    // borderRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  icon: {
    flexDirection: "row",
    // margin: 10,
    gap: 20,
  },
});
