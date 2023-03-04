import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../constants/colors";

export default function LogIn({ navigation }) {
  function goToSignupScreen() {
    navigation.navigate("SignUp");
  }
  return (
    <View style={styles.screenContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Log In</Text>
      </View>
      <TextInput
        style={styles.textInput}
        placeholder={"email"}
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        //autoFocus={true}
        inputMode="email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.textInput}
        placeholder={"password"}
        secureTextEntry={true}
      />
      <View style={styles.logInButtonContainer}>
        <Pressable
          style={styles.logInButton}
          android_ripple={{ color: "pink" }}
        >
          <Text style={styles.logInButtonText}>Log In</Text>
        </Pressable>
      </View>
      <Pressable style={styles.registerButton} onPress={goToSignupScreen}>
        <Text style={styles.registerButtonText}>Register</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
  },
  titleContainer: {
    //backgroundColor: "pink",
    flex: 1 / 4,
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 26,
    color: Colors.primary,
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    margin: 20,
    borderRadius: 8,
    padding: 10,
  },
  logInButtonContainer: {
    alignItems: "center",
  },
  logInButton: {
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 30,
    elevation: 10,
    borderRadius: 5,
  },
  logInButtonText: {
    color: "white",
  },
  registerButton: {
    marginVertical: 40,
    paddingHorizontal: 20,
  },
  registerButtonText: {
    color: Colors.primary,
  },
});
