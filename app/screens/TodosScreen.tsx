import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TodoItem from "../../components/TodoItem";
import { useFetch } from "../../hooks/useFetch";
import { Todo } from "../../types/Todo";

export default function TodosScreen() {
  const {
    data: todos,
    isLoading,
    error,
  } = useFetch<Todo[]>("https://jsonplaceholder.typicode.com/todos");

  // Ograniczamy liczbę zadań do 20
  const displayedTodos = todos ? todos.slice(0, 20) : [];

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#4f46e5" />
        <Text style={styles.infoText}>Ładowanie zadań...</Text>
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
      <Text style={styles.header}>Lista zadań (To-Do)</Text>

      <FlatList
        data={displayedTodos}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TodoItem title={item.title} completed={item.completed} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
    paddingTop: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "800",
    color: "#111827",
    marginHorizontal: 16,
    marginBottom: 20,
    letterSpacing: -0.5,
  },
  listContent: {
    paddingBottom: 20,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9fafb",
  },
  infoText: {
    marginTop: 12,
    fontSize: 16,
    color: "#4b5563",
    fontWeight: "500",
  },
  errorText: {
    fontSize: 16,
    color: "#ef4444",
    textAlign: "center",
    marginHorizontal: 20,
    fontWeight: "500",
  },
});
