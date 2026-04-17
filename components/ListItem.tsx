import { Text, View } from "react-native";
import { styles } from "./ListItemStyles";
import { ListItemProps } from "./ListItemTypes";

export default function ListItem({ title, description, location, category, isHighlighted }: ListItemProps) {
    return (
        <View style={[styles.container, isHighlighted && styles.highlighted]}>
            <View style={styles.categoryTag}>
                <Text style={styles.categoryText}>{category}</Text>
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.locationText}>Lokalizacja: {location}</Text>
        </View>
    );
}