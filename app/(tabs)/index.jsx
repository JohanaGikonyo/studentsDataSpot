import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Link } from "expo-router";
import { Appbar } from "react-native-paper";

const DefaultTab = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearchChange = (text) => {
    setSearch(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Link href="/settings/setting" style={styles.icon}>
          <FontAwesome size={24} name="cog" color="black" />
        </Link>
        <SearchBar
          placeholder="Search Here..."
          platform="default"
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={styles.searchInputContainer}
          inputStyle={styles.searchInput}
          value={search}
          onChangeText={handleSearchChange}
          showLoading={false}
        />
        <FontAwesome size={24} name="microphone" color="black" style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderRadius: 25,
    backgroundColor: "#f0f0f0", // Light gray background for search bar
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchBarContainer: {
    flex: 1,
    backgroundColor: "transparent", // Transparent background for search bar container
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingHorizontal: 0,
  },
  searchInputContainer: {
    backgroundColor: "#ccc", // White background for input
    borderRadius: 20,
    color: "white",
    height: 40,
  },
  searchInput: {
    fontSize: 16,
    padding: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default DefaultTab;
