import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 12,
        marginHorizontal: 16,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    highlighted: {
        backgroundColor: "#e3f2fd",
        borderColor: "#2196f3",
        borderWidth: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 4,
    },
    description: {
        color: "#444",
        marginBottom: 4,
    },
    speaker: {
        fontSize: 13,
        color: "#555",
        fontWeight: "500",
        marginBottom: 4,
    },
    categoryTag: {
        backgroundColor: "#eee",
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
        alignSelf: "flex-start",
        marginBottom: 8,
    },
    categoryText: {
        fontSize: 10,
        fontWeight: "bold",
        textTransform: "uppercase",
        color: "#666",
    },
    locationText: {
        fontSize: 12,
        color: "#777",
        fontStyle: "italic",
    },
});
