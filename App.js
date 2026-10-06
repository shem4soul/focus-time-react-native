import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  safeAreaView,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <safeAreaView style={styles.container}>
      <Text style={styles.text}>Hello shem, Germany is ready for you</Text>
      <StatusBar style="auto" />
    </safeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    bachgroundColor: colors.darkBlue,
  },
  text: {
    color: colors.white,
  },
});
