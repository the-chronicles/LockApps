import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
        {/* App Name */}
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>My App Name</Text>

        {/* Share */}
        <DrawerItem
          label="Share"
          onPress={() => {
            // Handle Share functionality
          }}
          icon={({ color, size }) => <AntDesign name="sharealt" size={size} color={color} />}
        />

        {/* Remove Ads */}
        <DrawerItem
          label="Remove Ads"
          onPress={() => {
            // Handle Remove Ads functionality
          }}
          icon={({ color, size }) => <AntDesign name="closecircleo" size={size} color={color} />}
        />

        {/* Rate Us */}
        <DrawerItem
          label="Rate Us"
          onPress={() => {
            // Handle Rate Us functionality
          }}
          icon={({ color, size }) => <AntDesign name="staro" size={size} color={color} />}
        />

        {/* Feedback */}
        <DrawerItem
          label="Feedback"
          onPress={() => {
            // Handle Feedback functionality
          }}
          icon={({ color, size }) => <AntDesign name="message1" size={size} color={color} />}
        />

        {/* Help */}
        <DrawerItem
          label="Help"
          onPress={() => {
            // Handle Help functionality
          }}
          icon={({ color, size }) => <AntDesign name="questioncircleo" size={size} color={color} />}
        />
      </View>
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
