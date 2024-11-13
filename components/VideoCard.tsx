import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

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
  const [play, setplay] = useState(false);

  return (
    <View className='flex-col items-center mb-14 px-4'>
      <View className='flex-row gap-3 items-start'>
        <View className='justify-center items-center flex-row flex-1'>
          <View className='w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5'>
            <Image
              source={{ uri: video.thumbnail }}
              resizeMode='cover'
              className='w-full h-full rounded-lg'
            />
          </View>

          <View className='justify-center flex-1 ml-3 gap-y-1'>
            <Text className='text-white font-psemibold text-sm'>
              {video.title}
            </Text>
            <Text className='text-xs text-gray-100 font-pregular'>
              ThankGod
            </Text>
          </View>
        </View>

        <View className='pt-2'>
          <Image
            source={require("@/assets/icons/menu.png")}
            className='w-5 h-5'
            resizeMode='contain'
          />
        </View>
      </View>

      {play ? (
        <Text className="text-white">Playing</Text>
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setplay(true)}
          className='w-full h-60 rounded-xl mt-3 relative justify-center items-center'
        >
          <Image
            source={{ uri: video.thumbnail }}
            className='w-full h-full rounded-xl mt-3'
            resizeMode='cover'
          />
          <Image
            source={require("@/assets/icons/play.png")}
            className='w-12 h-12 absolute'
            resizeMode='contain'
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;

const styles = StyleSheet.create({});
