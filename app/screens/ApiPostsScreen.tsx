import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import ApiPostItem from "../../components/ApiPostItem";
import { useFetch } from "../../hooks/useFetch";
import { RootStackParamList } from "../../types/Navigation";
import { Post } from "../../types/Post";

type ApiPostsScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "ApiPosts">;
};

export default function ApiPostsScreen({ navigation }: ApiPostsScreenProps) {
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch<Post[]>("https://jsonplaceholder.typicode.com/posts");

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
        data={posts ?? []}
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
