import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Alert, Button, FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../(tabs)/index";
import ListItem from "../../components/ListItem";

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

interface EventItem {
  id: number;
  title: string;
  description: string;
  location: string;
  time: string;
  isHighlighted?: boolean;
}

const events: EventItem[] = [
  { id: 1, title: "Laboratorium mobile: Podstawy", description: "Wprowadzenie do React Native", location: "Sala A1, Płock", time: "10:00" },
  { id: 2, title: "Hooki od podstaw", description: "Zarządzanie stanem z useState", location: "Sala A2, Warszawa", time: "12:00" },
  { id: 3, title: "Architektura nawigacji", description: "Nawigacja w aplikacjach mobilnych", location: "Sala A3, Kraków", time: "14:00" },
  { id: 4, title: "Pracownia UI/UX", description: "Tworzenie pięknych animacji", location: "Sala A4, Gdańsk", time: "16:00" },
  { id: 5, title: "Sieciowe API i integracje", description: "Praca z zewnętrznym API", location: "Sala A5, Wrocław", time: "18:00" },
  { id: 6, title: "Silne typowanie w praktyce", description: "TypeScript w React Native", location: "Sala A6, Poznań", time: "20:00" },
  { id: 7, title: "Wydajność systemów mobilnych", description: "Optymalizacja wydajności aplikacji", location: "Sala A7, Szczecin", time: "22:00" },
  { id: 8, title: "QA: Testowanie automatyczne", description: "Testowanie komponentów w Jest", location: "Sala A8, Łódź", time: "08:00" },
  { id: 9, title: "Zaawansowane wzorce JS", description: "Wzorce projektowe w Reakcie", location: "Sala A9, Bydgoszcz", time: "10:00" },
  { id: 10, title: "DevOps dla Mobile", description: "Proces CI/CD dla React Native", location: "Sala A10, Lublin", time: "12:00" },
  { id: 11, title: "Powiadomienia Push i FCM", description: "Wysyłanie Powiadomień Push", location: "Sala A11, Katowice", time: "14:00" },
  { id: 12, title: "Zarządzanie dystrybucją Apple", description: "Publikacja w App Store", location: "Sala A12, Rzeszów", time: "16:00" },
  { id: 13, title: "Metodyka wdrażania Android", description: "Publikacja w Google Play", location: "Sala A13, Toruń", time: "18:00" },
  { id: 14, title: "Integracja natywnego kodu", description: "Użycie natywnych modułów (Java/Swift)", location: "Sala A14, Opole", time: "20:00" },
  { id: 15, title: "Bazy danych offline (NoSQL)", description: "Praca z bazami danych noSQL", location: "Sala A15, Kielce", time: "22:00" }
];



export default function HomeScreen({ navigation }: HomeScreenProps) {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Smart Campus</Text>

      <Text style={styles.subtitle}>W ilu zajęciach chcesz uczestniczyć?</Text>
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>Licznik: {count}</Text>
        <Button title="Zwiększ" onPress={() => setCount(count + 1)} />
      </View>

      <FlatList
        style={styles.list}
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => {
          const isLocked = index >= count;

          return (
            <Pressable
              style={({ pressed }) => [
                pressed && !isLocked && { opacity: 0.7 },
                isLocked && { opacity: 0.5 }
              ]}
              onPress={() => {
                if (isLocked) {
                  Alert.alert("Brak dostępu", "Zwiększ licznik, aby móc wejść w ten wykład.");
                  return;
                }
                navigation.navigate("Details", {
                  title: item.title,
                  description: item.description,
                  location: item.location,
                  time: item.time,
                });
              }}
            >
              {({ pressed, hovered }: any) => (
                <ListItem
                  title={item.title + (isLocked ? " 🔒" : "")}
                  description={item.description}
                  location={item.location || ""}
                  isHighlighted={!isLocked && (hovered || pressed || item.isHighlighted || false)}
                />
              )}
            </Pressable>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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