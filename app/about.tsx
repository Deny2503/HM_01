import { Text, StyleSheet, Image, ScrollView, Pressable } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={require("../assets/images/my-photo.jpg")}
          style={styles.image}
        />

        <Text style={styles.name}>Імя: Дмитро Білоцерковський</Text>
        <Text style={styles.info}>Хобі: програмування, спорт, музика </Text>

        <Link href="/" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Повернутися назад</Text>
          </Pressable>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F5FF",
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#4C6EF5",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2D2E83",
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: "#444",
    marginBottom: 8,
    textAlign: "center",
  },
  button: {
    marginTop: 25,
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
