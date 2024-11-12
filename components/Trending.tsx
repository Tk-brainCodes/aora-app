import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native";

interface TrendingProps {
  post: {
    id: number;
  }[];
}
[];

const Trending = ({ post }: TrendingProps) => {
  return (
    <FlatList
      data={post}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <Text className='text-3xl text-white'>{item.id}</Text>
      )}
      horizontal
    />
  );
};

export default Trending;

const styles = StyleSheet.create({});
