import { View, Text, ScrollView } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import CustomButton from "@/components/CustomButton";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className='w-full mn-h-[85vh] flex items-center justify-center px-4'>
          <Image
            source={require("@/assets/images/logo.png")}
            className='w-[130px] h-[84px]'
            resizeMode='contain'
          />

          <Image
            source={require("@/assets/images/cards.png")}
            className='max-w-[380px] w-full h-[298px]'
            resizeMode='contain'
          />

          <View className='relative mt-5'>
            <Text className='text-3xl text-white font-bold text-center'>
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className='text-secondary-200'>Aora</Text>
            </Text>

            <Image
              source={require("@/assets/images/path.png")}
              className='w-[136px] h-[15px] absolute -bottom-2 -right-8'
              resizeMode='contain'
            />
          </View>
          <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            title='Continue with Email'
            onPress={() => router.push("/sign-in")}
            containerStyle='w-full mt-7'
            isLoading={false}
            textStyles=''
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#161622",
    height: "100%",
  },
});
