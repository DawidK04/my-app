import { StyleSheet, Text, View } from "react-native";

type ListItemProps = {
  title: string;
  description: string;
  location: string;
  isHighlighted: boolean;
};

export default function ListItem({ title, description, location, isHighlighted }: ListItemProps) {
  return (
    <View style={[styles.container, isHighlighted && styles.highlighted]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      
      {}
      <Text style={styles.locationText}>Lokalizacja: {location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginHorizontal: 16,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  highlighted: {
    backgroundColor: "#e3f2fd",
    borderColor: "#2196f3",
    borderWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
  },
  description: {
    color: "#444",
    marginBottom: 4,
  },
  locationText: {
    fontSize: 12,
    color: "#777",
    fontStyle: "italic",
  },
});