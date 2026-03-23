import { Tabs } from "expo-router";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarShowLabel: false,

        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "rgba(255,255,255,0.1)",
          borderRadius: 25,
          height: 70,
          borderTopWidth: 0,
        },

        tabBarBackground: () => (
          <View style={styles.blur} />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={26}
              color={focused ? "#fff" : "#ffffff88"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.centerButton}>
              <Ionicons name="add" size={30} color="#fff" />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  blur: {
    flex: 1,
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,0.08)",
  },

  centerButton: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: "#ff3b30",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    shadowColor: "#ff3b30",
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 10,
  },
});