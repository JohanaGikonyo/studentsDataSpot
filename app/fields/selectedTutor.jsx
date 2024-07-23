import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { tw } from "nativewind"; // Ensure nativewind is imported
import { Appbar } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

const SelectedTutor = () => {
  const router = useRouter();
  const { name, image, major, year } = useLocalSearchParams();
  const [selectedValue, setSelectedValue] = useState(null);

  const radioButtons = [
    { label: "Online", value: "online" },
    { label: "Physical", value: "physical" },
  ];

  const RadioButton = ({ label, value, selected, onSelect }) => {
    return (
      <TouchableOpacity className="flex-row items-center mb-2" onPress={() => onSelect(value)}>
        <View
          className={`h-6 w-6 rounded-full border-2 items-center justify-center mr-2 ${
            selected ? "border-green-500" : "border-gray-800"
          }`}
        >
          {selected && <View className="h-3 w-3 rounded-full bg-green-500" />}
        </View>
        <Text className="text-lg">{label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text className="m-4 text-3xl font-bold">{name}</Text>
      <Image source={{ uri: image }} style={styles.image} />

      <View className="bg-slate-300 p-5 rounded-lg text-center">
        <Text className="text-slate-800 m-2 font-bold">Name : {name}</Text>
        <Text className="text-slate-800 m-2 font-bold">Major : {major}</Text>
        <Text className="text-slate-800 m-2 font-bold">Institution : Multimedia University of Kenya</Text>
        <Text className="text-slate-800 m-2 font-bold">Year : {year}</Text>
        <Text className="text-slate-800 m-2 font-bold">Graduation Date : December 2027</Text>
        <Text className="text-slate-800 m-2 font-bold">Phone Number: +25478545664</Text>
        <Text className="text-slate-800 m-2 font-bold">Email : tutor@gmail.com</Text>
      </View>

      <View className="mt-4">
        <Text className="mb-2 font-bold text-lg">To book a tutoring session, Choose</Text>
        <View className="justify-center items-center p-5">
          {radioButtons.map((radio, index) => (
            <RadioButton
              key={index}
              label={radio.label}
              value={radio.value}
              selected={radio.value === selectedValue}
              onSelect={setSelectedValue}
            />
          ))}
          <TouchableOpacity
            className="mt-5 p-4 bg-slate-300 rounded-lg"
            onPress={() => {
              /* Handle booking logic here */
            }}
          >
            <Text className="text-lg font-bold">Book {selectedValue ? selectedValue : ""}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SelectedTutor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 15,
    marginBottom: 20,
  },
});
