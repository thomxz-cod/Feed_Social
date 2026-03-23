import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  gradient: {
    flex: 1,
    padding: 16,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ffffff33",
    marginRight: 10,
  },

  input: {
    flex: 1,
    backgroundColor: "#ffffff22",
    padding: 12,
    borderRadius: 8,
    color: "#fff",
  },

  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },

  actionBtn: {
    width: 70,
    height: 30,
    backgroundColor: "#ffffff22",
    borderRadius: 8,
  },

  postCard: {
    backgroundColor: "#ffffff15",
    borderRadius: 20,
    padding: 12,
    marginTop: 12,
  },

  postImage: {
    width: "100%",
    height: 300,
    borderRadius: 16,
  },

  postFooter: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    justifyContent: "space-between",
  },

  postUser: {
    flexDirection: "row",
    alignItems: "center",
  },

  postAvatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginRight: 10,
  },

  textBlock: {
    width: 120,
    height: 10,
    backgroundColor: "#ffffff55",
    marginBottom: 6,
    borderRadius: 4,
  },

  smallText: {
    width: 80,
    height: 10,
    backgroundColor: "#ffffff55",
    borderRadius: 4,
  },

  button: {
    width: 80,
    height: 30,
    backgroundColor: "#ffffff33",
    borderRadius: 20,
  },
});