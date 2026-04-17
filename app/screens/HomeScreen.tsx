import { useState } from "react";
import { Alert, Button, FlatList, Pressable, Text, View } from "react-native";
import ListItem from "../../components/ListItem";
import { events } from "../../data/events";
import { Event } from "../../types/Event";
import { HomeScreenProps } from "../../types/HomeScreenTypes";
import { styles } from "./HomeScreenStyles";

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
        renderItem={({ item, index }: { item: Event; index: number }) => {
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
                  category={item.category}
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