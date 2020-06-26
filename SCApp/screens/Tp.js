import React, { useEffect } from "react";
import { Text, View, StyleSheet, BackHandler, Alert } from "react-native";


export default function Tp() {
  useEffect(() => {
    const backAction = () => {
        null;
      Alert.alert("Hold on!", "You can not go back!", [
        {
          text: "OK",
          onPress: () => null,
          style: "cancel"
        }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Click Back button!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold"
  }
});
