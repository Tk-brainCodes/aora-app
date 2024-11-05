import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  containerStyle: string;
  isLoading: boolean;
  textStyles: "";
}

const CustomButton = ({
  title,
  onPress,
  containerStyle,
  isLoading,
  textStyles,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={`${containerStyle} bg-secondary rounded-xl min-h-[62px] justify-center items-center ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`'text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
