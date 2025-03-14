import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/style";
import Button from "./Button";

export default function ErrorOverlay({ message, onConfirm }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.text]}>
        An error occurred while retrieving expenses.
      </Text>

      <Text style={styles.text}>
        {message}
        {message}
      </Text>

      <Button onPress={onConfirm}>Okay</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    textAlign: "center",
    color: "white",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
