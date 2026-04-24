import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import { Event } from "../types/Event";

type AddEventFormProps = {
    onAddEvent: (event: Omit<Event, "id">) => void;
};

export default function AddEventForm({ onAddEvent }: AddEventFormProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [speaker, setSpeaker] = useState("");

    const handleAddEvent = () => {
        if (!title || !description || !location || !date || !category || !speaker) {
            Alert.alert("Błąd", "Wszystkie pola muszą być uzupełnione.");
            return;
        }

        if (title.length < 3) {
            Alert.alert("Błąd", "Tytuł musi mieć co najmniej 3 znaki.");
            return;
        }

        if (date.trim() === "") {
            Alert.alert("Błąd", "Data nie może być pusta.");
            return;
        }

        onAddEvent({
            title,
            description,
            location,
            date,
            category,
            speaker,
        });

        Alert.alert("Wydarzenie zostało dodane.");

        setTitle("");
        setDescription("");
        setLocation("");
        setDate("");
        setCategory("");
        setSpeaker("");
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Tytuł wydarzenia"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Prowadzący"
                value={speaker}
                onChangeText={setSpeaker}
            />
            <TextInput
                style={[styles.input]}
                placeholder="Opis"
                value={description}
                onChangeText={setDescription}
            />
            <TextInput
                style={styles.input}
                placeholder="Lokalizacja"
                value={location}
                onChangeText={setLocation}
            />
            <TextInput
                style={styles.input}
                placeholder="Data (YYYY-MM-DD)"
                value={date}
                onChangeText={setDate}
            />
            <TextInput
                style={styles.input}
                placeholder="Kategoria"
                value={category}
                onChangeText={setCategory}
            />
            <Button title="Dodaj wydarzenie" onPress={handleAddEvent} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#fff",
        borderRadius: 8,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 12,
        marginBottom: 12,
        borderRadius: 6,
        fontSize: 16,
    },
    textArea: {
        height: 80,
        textAlignVertical: "top",
    },
});
