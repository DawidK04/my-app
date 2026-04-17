import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    paddingTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 16,
  },
  list: {
    width: "100%",
    marginTop: 12,
  },
  item: {
    backgroundColor: "#fff",
    padding: 12,
    marginHorizontal: 16,
    marginBottom: 10,
    borderRadius: 8,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemLocation: {
    color: "#666",
    marginBottom: 6,
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  counterText: {
    fontSize: 18,
    fontWeight: "500",
    marginRight: 16,
  },
});
