import { StyleSheet, Text, View } from "react-native";

type TodoItemProps = {
  title: string;
  completed: boolean;
};

export default function TodoItem({ title, completed }: TodoItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={[styles.title, completed && styles.completedTitle]}>
          {title}
        </Text>
        <View style={[styles.badge, completed ? styles.completedBadge : styles.pendingBadge]}>
          <Text style={[styles.badgeText, completed ? styles.completedBadgeText : styles.pendingBadgeText]}>
            {completed ? "Wykonane" : "Niewykonane"}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: "#4f46e5",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
    textTransform: "capitalize",
  },
  completedTitle: {
    textDecorationLine: "line-through",
    color: "#9ca3af",
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  completedBadge: {
    backgroundColor: "#dcfce7",
  },
  pendingBadge: {
    backgroundColor: "#fee2e2",
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "700",
  },
  completedBadgeText: {
    color: "#166534",
  },
  pendingBadgeText: {
    color: "#991b1b",
  },
});
