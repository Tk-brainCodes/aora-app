import { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

import React from "react";

//com.beginner.aora

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {};

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
            Sign Up
          </Text>

          <FormField
            title='Username'
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles='mt-10'
            placeholder='Your unique username'
          />

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
            title='Sign up'
            onPress={handleSubmit}
            containerStyle='mt-7'
            textStyles=''
            isLoading={isSubmitting}
          />

          <View className='flex-row justify-center pt-5 gap-2'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Already have an account?{" "}
              <Link
                href='/sign-in'
                className='text-lg font-pregular text-secondary'
              >
                Login
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});