import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";

interface VideoProps {
  video: {
    title: string;
    thumbnail: string;
    video: string;
    creator: {
      username: string;
      avatar: string;
    };
  };
}

const VideoCard = ({ video }: VideoProps) => {
  return (
    <View className='flex-col items-center mb-14 px-4'>
      <View className='flex-row gap-3 items-start'>
        <View className='justify-center items-center flex-row flex-1'>
          <View className='w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5'>
            <Image
              source={{ uri: video.creator.avatar }}
              resizeMode='cover'
              className='w-full h-full rounded-lg'
            />{" "}
          </View>
        </View>
      </View>
      <Text className='text-2xl text-white'>{video.title}</Text>
    </View>
  );
};

export default VideoCard;

const styles = StyleSheet.create({});
