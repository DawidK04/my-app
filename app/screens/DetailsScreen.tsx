import { RouteProp } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../(tabs)/index";

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;

type DetailsScreenRouteProps = {
  route: DetailsScreenRouteProp;
};

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    width: 110,
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2196f3',
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 16,
  },
  descriptionLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  }
});