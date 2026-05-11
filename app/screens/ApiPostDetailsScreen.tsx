import { RouteProp } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../../types/Navigation";

type ApiPostDetailsRouteProp = RouteProp<
  RootStackParamList,
  "ApiPostDetails"
>;

type ApiPostDetailsScreenProps = {
  route: ApiPostDetailsRouteProp;
};

export default function ApiPostDetailsScreen({
  route,
}: ApiPostDetailsScreenProps) {
  const { id, title, body } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.meta}>ID posta: {id}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
    textTransform: "capitalize",
  },
  meta: {
    fontSize: 14,
    color: "#888",
    marginBottom: 16,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: "#444",
  },
});
