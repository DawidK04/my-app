import { Text, View } from "react-native";
import { DetailsScreenRouteProps } from "../../types/DetailsScreenTypes";
import { styles } from "./DetailsScreenStyles";

export default function DetailsScreen({ route }: DetailsScreenRouteProps) {
  const { title, description, location, time } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Godzina:</Text>
          <Text style={styles.value}>{time}</Text>
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