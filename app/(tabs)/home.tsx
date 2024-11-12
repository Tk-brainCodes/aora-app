import { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import { useGlobalContext } from "@/context/GlobalContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import SearchInput from "@/components/SearchInput";
import Trending from "@/components/Trending";
import EmptyState from "@/components/EmptyState";
import { RefreshControl } from "react-native";
import useAppwrite from "@/lib/useAppwrite";
import { getAllPosts } from "@/lib/appWrite";
import VideoCard from "@/components/VideoCard";

const Home = () => {
  const { isLoggedin, user } = useGlobalContext();
  const { data: posts, loading, refetch } = useAppwrite(getAllPosts);
  const [refreshing, setrefreshing] = useState(false);

  const onRefresh = async () => {
    setrefreshing(true);
    refetch();
    setrefreshing(false);
  };

  return (
    <SafeAreaView className='bg-primary flex-1 h-full'>
      <FlatList
        data={posts["_j"]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item}/>}
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

            <SearchInput placeholder='Search for a video topic' />

            <View className='w-full flex-1 pt-5 pb-8'>
              <Text className='text-gray-100 text-lg font-pregular mb-3'>
                Latest Videos
              </Text>

              <Trending post={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title='No videos found'
            subtitle='Be the first one to create a video'
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({});
