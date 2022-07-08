import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import hotels from "../data/hotels";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SimpleLineIcons } from "@expo/vector-icons";
const Hotels = (props) => {
  const restaurent = props.restaurent;
  // console.log("👉❤",props);
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("HotelRoom", {
          id: restaurent.id,
          name: restaurent.name,
          adress: restaurent.adress,
          smalladress: restaurent.smalladress,
          cuisines: restaurent.cuisines,
          aggregate_rating: restaurent.aggregate_rating,
          no_of_Delivery: restaurent.no_of_Delivery,
          menu: restaurent.menu,
          latitude: restaurent.latitude,
          longitude: restaurent.longitude,
        })
      }
      style={styles.container}
    >
      <Image style={styles.image} source={{ uri: restaurent.featured_image }} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.leftContainer}>
          <Text style={styles.text}>{restaurent.name}</Text>
          <Text style={styles.cuisinestext}>{restaurent.cuisines}</Text>
        </View>

        <View style={styles.rightContainer}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            {restaurent.aggregate_rating}
          </Text>
          <Ionicons name="star" size={15} color="white" />
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 140,
          fontSize: 18,
          color: "white",
          fontWeight: "bold",
          backgroundColor: "#318CE7",
          paddingHorizontal: 10,
          padding: 3,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        }}
      >
        <Text style={{color: "white", fontWeight:"bold"}}>{restaurent.offer}</Text>
        <Text style={{paddingTop:2,fontWeight:"bold"}}>Up to ₹40</Text>
      </View>
      <View style={styles.time}>
        <SimpleLineIcons name="clock" size={15} color="green" />
        <Text style={{ marginLeft: 3, fontSize: 12 }}>{restaurent.time}</Text>
      </View>
      <View style={styles.lineStyle} />
      <View style={styles.delivery}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Feather
            style={{
              backgroundColor: "#4B9CD3",
              borderRadius: 30,
              marginRight: 7,
              padding: 3,
            }}
            name="chevrons-right"
            size={24}
            color="white"
          />
          <Text style={{ color: "#404040", fontWeight: "600" }}>
            {restaurent.no_of_Delivery} + orders placed here
          </Text>
        </View>
        <Image
          style={{
            width: "20%",
            height: 30,
            marginLeft: 30,
            resizeMode: "contain",
          }}
          source={{
            uri: "data:image/jpeg;base64,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",
          }}
        />
      </View>
    </Pressable>
  );
};

export default Hotels;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderRadius: 20,
    backgroundColor: "white",
  },
  image: {
    // resizeMode: "contain",
    width: "100%",
    aspectRatio: 6 / 4,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  text: {
    paddingHorizontal: 10,
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
  },
  cuisinestext: {
    marginTop: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    fontSize: 14,
    color: "#989898",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3CB371",
    padding: 5,
    borderRadius: 7,
    marginBottom: 8,
    marginRight: 10,
  },
  leftContainer: {},
  offer: {},
  time: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    bottom: 140,
    backgroundColor: "white",
    paddingHorizontal: 10,
    borderRadius: 6,
    padding: 2,
    right: 10,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "#C8C8C8",
    marginHorizontal: 15,
    marginVertical: 4,
  },
  delivery: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 6,
  },
});
