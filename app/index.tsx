import { SafeAreaView, View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Мій перший Expo-додаток 🚀</Text>
        <Text style={styles.description}>
          Це простий застосунок з навігацією між екранами та стилізацією.
        </Text>

        <Link href="/about" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Про мене</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F5FF",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2D2E83",
    marginBottom: 15,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#444",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#4C6EF5",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
