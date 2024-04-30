// // import {
// //   FlatList,
// //   StyleSheet,
// //   Switch,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   View,
// // } from "react-native";
// // import { theme } from "../utils/theme";
// // import { AntDesign } from "@expo/vector-icons";
// // import { useEffect, useState } from "react";
// // import { InstalledApps } from "react-native-launcher-kit";

// // import AsyncStorage from "@react-native-async-storage/async-storage";

// // function Unlocked() {
// //   const [appList, setAppList] = useState([]);
// //   const [lockedApps, setLockedApps] = useState([]);
// //   const [searchQuery, setSearchQuery] = useState("");

// //   useEffect(() => {
// //     const fetchAppList = async () => {
// //       try {
// //         const installedApps = await InstalledApps.getApps();
// //         setAppList(installedApps);
// //       } catch (error) {
// //         console.error("Error fetching app list:", error);
// //       }
// //     };
// //     fetchAppList();
// //   }, []);

// //   // const toggleAppLock = async (appName, isLocked) => {
// //   //   setLockedApps((prevLockedApps) => {
// //   //     const updatedLockedApps = isLocked
// //   //       ? [...prevLockedApps, appName]
// //   //       : prevLockedApps.filter((app) => app !== appName);
// //   //     return updatedLockedApps;
// //   //   });

// //   //   await AsyncStorage.setItem("lockedApps", JSON.stringify(lockedApps));
// //   // };

// //   const toggleAppLock = async (appName, isLocked) => {
// //     const updatedLockedApps = isLocked
// //       ? [...lockedApps, appName]
// //       : lockedApps.filter((app) => app !== appName);
// //     setLockedApps(updatedLockedApps);

// //     const newFilteredList =
// //       searchQuery === ""
// //         ? updatedLockedApps
// //         : appList.filter(
// //             (app) =>
// //               app.appName &&
// //               app.appName.toLowerCase().includes(searchQuery.toLowerCase())
// //           );
// //     setFilteredAppList(newFilteredList);

// //     await AsyncStorage.setItem("lockedApps", JSON.stringify(updatedLockedApps));
// //   };

// //   const removeLockedApp = async (appName) => {
// //     const updatedLockedApps = lockedApps.filter((app) => app !== appName);
// //     setLockedApps(updatedLockedApps);

// //     await AsyncStorage.setItem("lockedApps", JSON.stringify(updatedLockedApps));
// //   };

// //   const filteredAppList =
// //     searchQuery === ""
// //       ? appList
// //       : appList.filter(
// //           (app) =>
// //             app.appName &&
// //             app.appName.toLowerCase().includes(searchQuery.toLowerCase())
// //         );

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.search}>
// //         <TextInput
// //           style={styles.inputTextContainer}
// //           placeholder="Search apps"
// //           keyboardType="default"
// //           autoCapitalize="none"
// //           autoCorrect={false}
// //           returnKeyType="search"
// //           value={searchQuery}
// //           onChangeText={(text) => setSearchQuery(text)}
// //         />
// //         <AntDesign
// //           name="search1"
// //           size={24}
// //           color="black"
// //           style={styles.searchIcon}
// //         />
// //       </View>
// //       <FlatList
// //         data={filteredAppList}
// //         renderItem={({ item }) => (
// //           <View>
// //             <Text>{item.appName}</Text>
// //             <Switch
// //               value={lockedApps.includes(item.appName)}
// //               onValueChange={(isLocked) =>
// //                 toggleAppLock(item.appName, isLocked)
// //               }
// //             />
// //             {lockedApps.includes(item.appName) && (
// //               <TouchableOpacity onPress={() => removeLockedApp(item.appName)}>
// //                 <Text style={{ color: "red" }}>Remove</Text>
// //               </TouchableOpacity>
// //             )}
// //           </View>
// //         )}
// //         // keyExtractor={(item) => item.packageName}
// //         keyExtractor={(item, index) => index.toString()}
// //       />
// //     </View>
// //   );
// // }

// // export default Unlocked;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: theme.colors.accent,
// //     padding: 20,
// //   },
// //   search: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },
// //   inputTextContainer: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     padding: 16,
// //     borderWidth: 1,
// //     borderColor: theme.colors.secondary,
// //     borderRadius: 30,
// //     backgroundColor: "white",
// //     // textAlign: "center",
// //     paddingLeft: 45,
// //     paddingRight: 10,
// //   },
// //   searchIcon: {
// //     position: "absolute",
// //     top: 18,
// //     left: 15,
// //   },
// // });

// import React, { useState, useEffect } from "react";
// import { View, Text, FlatList, Switch, TouchableOpacity } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { theme } from "../utils/theme";
// import { AntDesign } from "@expo/vector-icons";
// import { SocialMediaApps } from "../utils/socialMediaApps";

// const Unlocked = () => {
//   const [socialMediaAppList, setSocialMediaAppList] = useState([]);
//   const [lockedSocialMediaApps, setLockedSocialMediaApps] = useState([]);

//   useEffect(() => {
//     // Fetch social media apps from AsyncStorage
//     const fetchLockedSocialMediaApps = async () => {
//       try {
//         const storedApps = await AsyncStorage.getItem("lockedSocialMediaApps");
//         if (storedApps) {
//           setLockedSocialMediaApps(JSON.parse(storedApps));
//         }
//       } catch (error) {
//         console.error("Error fetching locked social media appss:", error);
//       }
//     };
//     fetchLockedSocialMediaApps();
//   }, []);

//   useEffect(() => {
//     // Filter social media apps based on locked status
//     const filteredApps = SocialMediaApps.map((app) => ({
//       ...app,
//       isLocked: lockedSocialMediaApps.includes(app.id),
//     }));
//     setSocialMediaAppList(filteredApps);
//   }, [lockedSocialMediaApps]);

//   const toggleAppLock = async (appId, isLocked) => {
//     // Toggle the lock status of the app
//     const updatedLockedApps = isLocked
//       ? [...lockedSocialMediaApps, appId]
//       : lockedSocialMediaApps.filter((app) => app !== appId);
//     setLockedSocialMediaApps(updatedLockedApps);

//     // Update AsyncStorage with the new locked apps list
//     await AsyncStorage.setItem(
//       "lockedSocialMediaApps",
//       JSON.stringify(updatedLockedApps)
//     );
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: theme.colors.accent }}>
//       <FlatList
//         data={socialMediaAppList}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={{ flexDirection: "row", alignItems: "center" }}>
//             <Text>{item.name}</Text>
//             <Switch
//               value={item.isLocked}
//               onValueChange={(isLocked) => toggleAppLock(item.id, isLocked)}
//             />
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default Unlocked;

import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
// import { PackageManager } from "expo-package-manager";

import { PackageManager } from "@expo/package-manager";

const Unlocked = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [selectedApps, setSelectedApps] = useState([]);

  useEffect(() => {
    async function getInstalledApps() {
      const apps = await PackageManager.getInstalledApps();
      const socialMediaApps = apps.filter((app) => {
        // Filter social media apps (e.g., Facebook, Twitter, Instagram)
        return (
          app.name.includes("Facebook") ||
          app.name.includes("Twitter") ||
          app.name.includes("Instagram")
        );
      });
      setInstalledApps(socialMediaApps);
    }
    getInstalledApps();
  }, []);

  const handleSelectApp = (app) => {
    const alreadySelected = selectedApps.includes(app);
    if (alreadySelected) {
      setSelectedApps(
        selectedApps.filter((selectedApp) => selectedApp !== app)
      );
    } else {
      setSelectedApps([...selectedApps, app]);
    }
  };

  return (
    <View>
      <FlatList
        data={installedApps}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectApp(item)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Text>Selected Apps:</Text>
      {selectedApps.map((app) => (
        <Text key={app.name}>{app.name}</Text>
      ))}
    </View>
  );
};

export default Unlocked;
