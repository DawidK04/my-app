import { Text, View } from "react-native";
import { DetailsScreenRouteProps } from "../../types/DetailsScreenTypes";
import { styles } from "./DetailsScreenStyles";

export default function DetailsScreen({ route }: DetailsScreenRouteProps) {
  const { title, description, location, date, category, speaker } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.categoryTag}>
          <Text style={styles.categoryText}>{category}</Text>
        </View>

        <Text style={styles.title}>{title}</Text>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Prowadzący:</Text>
          <Text style={styles.value}>{speaker}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Data:</Text>
          <Text style={styles.value}>{date}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Lokalizacja:</Text>
          <Text style={styles.value}>{location}</Text>
        </View>

        <View style={styles.divider} />

        <Text style={styles.descriptionLabel}>Opis wydarzenia</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}