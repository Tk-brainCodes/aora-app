import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { useGlobalContext } from "@/context/GlobalContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import SearchInput from "@/components/SearchInput";

const Home = () => {
  const { isLoggedin, user } = useGlobalContext();

  return (
    <SafeAreaView className='bg-primary'>
      <FlatList
        data={[{ id: 1 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <Text>{item.id}</Text>}
        ListHeaderComponent={() => (
          <View className='flex my-6 px-4 space-y-6'>
            <View className='flex justify-between items-start flex-row mb-6'>
              <View>
                <Text className='font-pmedium text-sm text-gray-100'>
                  Welcome Back
                </Text>
                <Text className='text-2xl font-psemibold text-white'>
                  JSMastery
                </Text>
              </View>
              <View className='mt-1.5'>
                <Image
                  source={require("@/assets/images/logo-small.png")}
                  className='w-9 h-10'
                  resizeMode='contain'
                />
              </View>
            </View>

            {/*Search input component*/}
            {/* <SearchInput
            
            /> */}
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({});
