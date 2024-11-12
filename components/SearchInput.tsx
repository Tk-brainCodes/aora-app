import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Image } from "react-native";
import { icons } from "@/constants";

interface FormFieldProps {
  value: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
  placeholder: string;
}

const SearchInput = ({
  value,
  handleChangeText,
  otherStyles,
  ...props
}: FormFieldProps) => {
  return (
    <View className='flex flex-row items-center space-x-4 w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary'>
      <TextInput
        value={value}
        className='text-base mt-0.5 text-white flex-1 font-pregular'
        placeholder={props.placeholder}
        placeholderTextColor='#7b7b8b'
        onChangeText={handleChangeText}
      />

      <TouchableOpacity>
        <Image
          source={require("@/assets/icons/search.png")}
          className='w-5 h-5'
          resizeMode='contain'
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({});
