import { Pressable, StyleSheet, Text, View } from "react-native";

type ApiPostItemProps = {
  title: string;
  body: string;
  onPress: () => void;
};

export default function ApiPostItem({
  title,
  body,
  onPress,
}: ApiPostItemProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed
      ]}
    >
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.body} numberOfLines={2}>
          {body}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  content: {
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1a1a1a",
    letterSpacing: -0.5,
    textTransform: "capitalize",
  },
  body: {
    fontSize: 14,
    color: "#666666",
    lineHeight: 20,
  },
});
