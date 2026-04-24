import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

import AddEventForm from "../../components/AddEventForm";
import ListItem from "../../components/ListItem";
import { events as initialEvents } from "../../data/events";
import { Event } from "../../types/Event";
import { RootStackParamList } from "../../types/Navigation";
import { styles } from "./HomeScreenStyles";



type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const [events, setEvents] = useState<Event[]>(initialEvents);

  const addEvent = (newEvent: Omit<Event, "id">) => {
    const eventToAdd: Event = {
      id: Date.now(),
      ...newEvent,
    };

    setEvents((prevEvents) => [eventToAdd, ...prevEvents]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Smart Campus</Text>

      <AddEventForm onAddEvent={addEvent} />

      <FlatList
        style={styles.list}
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate("Details", {
                id: item.id,
                title: item.title,
                description: item.description,
                location: item.location,
                date: item.date,
                category: item.category,
                speaker: item.speaker,
              })
            }
          >
            <ListItem
              title={item.title}
              description={item.description}
              location={item.location}
              category={item.category}
              speaker={item.speaker}
              isHighlighted={item.isHighlighted || false}
            />
          </Pressable>
        )}
      />
    </View>
  );
}