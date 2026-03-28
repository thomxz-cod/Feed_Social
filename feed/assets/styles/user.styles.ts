import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#03041c",
  },

  header: {
    height: 180,
    backgroundColor: "#5c0f0f",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    alignSelf: "center",
    marginTop: -60,
    borderWidth: 4,
    borderColor: "#9d1bb8",
  },

  name: {
    color: "#fff",
    textAlign: "center",
    fontSize: 22,
    marginTop: 10,
    fontWeight: "bold",
  },

  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },

  statBox: {
    alignItems: "center",
  },

  statNumber: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  statLabel: {
    color: "#aaa",
    fontSize: 12,
  },

  gridImage: {
    width: "33%",
    height: 120,
  },
});