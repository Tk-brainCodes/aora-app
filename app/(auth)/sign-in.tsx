import { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import { Alert } from "react-native";
import { getCurrentUser, signIn } from "@/lib/appWrite";
import { router } from "expo-router";
import { useGlobalContext } from "@/context/GlobalContext";

import React from "react";

const SignIn = () => {
  const { setUser, setLoggedIn } = useGlobalContext();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in the form fields");
    }

    setIsSubmitting(true);

    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
      setUser(result);
      setLoggedIn(true);

      Alert.alert("Success", "User signed in successfully");
      router.replace("/home");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className=' w-full justify-center h-full px-4 my-6'>
          <Image
            source={require("@/assets/images/logo.png")}
            className='w-[115px] h-[35px]'
            resizeMode='contain'
          />
          <Text className='text-3xl font-semibold font-psemibold mt-10 text-white'>
            Sign in
          </Text>

          <FormField
            title='Email'
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles='mt-7'
            keyboardType='email-address'
            placeholder='johndoe@gmail.com'
          />

          <FormField
            title='Password'
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles='mt-7'
            placeholder='Enter your password'
          />

          <CustomButton
            title='Log in'
            onPress={handleSubmit}
            containerStyle='mt-7'
            textStyles=''
            isLoading={isSubmitting}
          />

          <View className='flex-row justify-center pt-5 gap-2'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Don’t have an account?{" "}
              <Link
                href='/sign-up'
                className='text-lg font-pregular text-secondary'
              >
                Signup
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
