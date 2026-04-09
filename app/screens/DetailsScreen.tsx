import { RouteProp } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

type RootStackParamList = {
  Home: undefined;
  Details: { title: string; description: string };
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;

type DetailsScreenRouteProps = {
    route: DetailsScreenRouteProp;
};

export default function DetailsScreen({ route }: DetailsScreenRouteProps) {
    const { title, description } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.container}>{title}</Text>
            <Text>{description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});