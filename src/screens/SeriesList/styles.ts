import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 36,
    paddingRight: 24,
    paddingLeft: 24,
    backgroundColor: "#1B1B1F",
  },
  containerSeries: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#313135",

    padding: 4,
    marginBottom: 6,
    borderRadius: 2,
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  textScreenTitle: {
    color: "#fff",
    fontSize: 24,
    alignSelf: "center",
    marginBottom: 10,
  },
  text: {
    color: "#fff",
    fontSize: 12,
  },
  image: {
    width: 48,
    height: 48,
    marginRight: 10,
    borderRadius: 2,
  },
});
