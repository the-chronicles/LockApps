import { FlatList, StyleSheet, Text, View } from "react-native";
import { theme } from "../utils/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

function Locked() {
  const [lockedApps, setLockedApps] = useState([]);

  useEffect(() => {
    const fetchLockedApps = async () => {
      try {
        const lockedAppsJson = await AsyncStorage.getItem("lockedApps");
        if (lockedAppsJson) {
          const lockedAppsArray = JSON.parse(lockedAppsJson);
          setLockedApps(lockedAppsArray);
        }
      } catch (error) {
        console.error("Error fetching locked apps:", error);
      }
    };
    fetchLockedApps();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={lockedApps}
        renderItem={({ item }) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default Locked;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.accent,
    padding: 20,
  },
});
