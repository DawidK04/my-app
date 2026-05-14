import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/Navigation";
import ApiPostDetailsScreen from "../screens/ApiPostDetailsScreen";
import ApiPostsScreen from "../screens/ApiPostsScreen";
import DetailsScreen from "../screens/DetailsScreen";
import HomeScreen from "../screens/HomeScreen";
import TodosScreen from "../screens/TodosScreen";
import UsersScreen from "../screens/UsersScreen";


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="ApiPosts"
            component={ApiPostsScreen}
            options={{ title: "Posty z API" }}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen
            name="ApiPostDetails"
            component={ApiPostDetailsScreen}
            options={{ title: "Szczegóły posta" }}
          />
          <Stack.Screen
            name="Users"
            component={UsersScreen}
            options={{ title: "Użytkownicy" }}
          />
          <Stack.Screen
            name="Todos"
            component={TodosScreen}
            options={{ title: "Lista zadań" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}