import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { useGlobalContext } from "@/context/GlobalContext";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const { isLoggedin, user } = useGlobalContext();

  return (
    <SafeAreaView>
      <FlatList
        data={[{ id: 1 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <Text>{item.id}</Text>}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
