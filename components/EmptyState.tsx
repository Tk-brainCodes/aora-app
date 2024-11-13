import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import { router } from "expo-router";
import CustomButton from "./CustomButton";
import { getAllPosts, getLatestPosts } from "@/lib/appWrite";
import useAppwrite from "@/lib/useAppwrite";

interface EmptyProp {
  title: string;
  subtitle: string;
}

const EmptyState = ({ title, subtitle }: EmptyProp) => {
  const { refetch: refetchForAllPosts } = useAppwrite(getAllPosts);
  const { refetch: refetchForLatestPosts } = useAppwrite(getLatestPosts);

  return (
    <View className='justify-center items-center px-4 '>
      <Image
        source={require("@/assets/images/empty.png")}
        resizeMode='contain'
        className='w-[270px] h-[215px]'
      />

      <Text className='fonr-pmedium text-sm text-gray-100'>{title}</Text>
      <Text className='text-xl text-center font-psemibold text-white mt-2'>
        {subtitle}
      </Text>

      <CustomButton
        title='Create video'
        onPress={() => router.push("/create")}
        containerStyle='w-full my-5'
        textStyles=''
      />
      <CustomButton
        title='Refresh'
        onPress={() => {
          refetchForAllPosts();
          refetchForLatestPosts();
        }}
        containerStyle='w-full my-5'
        textStyles=''
      />
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({});
