import { StyleSheet } from "react-native";

// https://reactnative.dev/docs/text-style-props#textdecorationline

export default StyleSheet.create({
  container: {
    flex: 1
  },
  sectionHeader: {
    fontWeight: "800",
    fontSize: 15,
    color: "#ffffffbd",
    marginTop: 20,
    marginBottom: 5
  },
  item: {
    margin: 7,
    alignItems: "center"
  },
  itemPhoto: {
    width: 100,
    height: 150,
    borderRadius: 5
  },
  itemText: {
    color: "rgba(255, 255, 255, 0.5)",
    marginTop: 5,
    fontSize: 10
  }
});
