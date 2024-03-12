import {
  FlatList,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../utils/theme";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { InstalledApps } from "react-native-launcher-kit";

function Unlocked() {
  const [appList, setAppList] = useState([]);
  const [lockedApps, setLockedApps] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchAppList = async () => {
      const installedApps = await InstalledApps.getApps();
      setAppList(installedApps);
    };
    fetchAppList();
  }, []);

  // const toggleAppLock = async (appName, isLocked) => {
  //   const updatedLockedApps = isLocked
  //     ? [...lockedApps, appName]
  //     : lockedApps.filter((app) => app !== appName);
  //   setLockedApps(updatedLockedApps);

  //   await AsyncStorage.setItem("lockedApps", JSON.stringify(updatedLockedApps));
  // };

  // const removeLockedApp = async (appName) => {  
  //   const updatedLockedApps = lockedApps.filter((app) => app !== appName);
  //   setLockedApps(updatedLockedApps);

  //   await AsyncStorage.setItem("lockedApps", JSON.stringify(updatedLockedApps));
  // };

  const filteredAppList = appList.filter((app) =>
    app.appName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          style={styles.inputTextContainer}
          placeholder="Search apps!"
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="go"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <AntDesign
          name="search1"
          size={24}
          color="black"
          style={styles.searchIcon}
        />
      </View>
      <FlatList
        data={filteredAppList}
        renderItem={({ item }) => (
          <View>
            <Text>{item.appName}</Text>
            <Switch
              value={lockedApps.includes(item.appName)}
              onValueChange={(isLocked) =>
                toggleAppLock(item.appName, isLocked)
              }
            />
            {lockedApps.includes(item.appName) && (
              <TouchableOpacity onPress={() => removeLockedApp(item.appName)}>
                <Text style={{ color: "red" }}>Remove</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
        keyExtractor={(item) => item.packageName}
      />
    </View>
  );
}

export default Unlocked;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.accent,
    padding: 20,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderWidth: 1,
    borderColor: theme.colors.secondary,
    borderRadius: 30,
    backgroundColor: "white",
    // textAlign: "center",
    paddingLeft: 45,
    paddingRight: 10,
  },
  searchIcon: {
    position: "absolute",
    top: 18,
    left: 15,
  },
});
