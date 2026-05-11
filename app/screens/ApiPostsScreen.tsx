import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import ApiPostItem from "../../components/ApiPostItem";
import { ApiPostsScreenProps } from "../../types/Navigation";
import { Post } from "../../types/Post";

export default function ApiPostsScreen({ navigation }: ApiPostsScreenProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        setError("");

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error("Nie udało się pobrać danych z serwera.");
        }

        const data: Post[] = await response.json();
        setPosts(data);
      } catch (err) {
        setError("Wystąpił błąd podczas pobierania danych.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
        <Text style={styles.infoText}>Ładowanie danych...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Posty z API</Text>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ApiPostItem
            title={item.title}
            body={item.body}
            onPress={() =>
              navigation.navigate("ApiPostDetails", {
                id: item.id,
                title: item.title,
                body: item.body,
              })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 16,
    textAlign: "center",
    color: "#333",
  },
  infoText: {
    marginTop: 10,
    fontSize: 16,
    color: "#666",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
    padding: 20,
  },
});
