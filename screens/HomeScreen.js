import React, { useState ,useEffect} from "react";
import { Image, KeyboardAvoidingView, Pressable,ScrollView , SafeAreaView, StyleSheet, Text, View,FlatList } from 'react-native'
import { TextInput } from 'react-native';
import { EvilIcons } from "@expo/vector-icons";
import Hotels from '../components/Hotels';
import hotels from "../data/hotels";
// import hotels from '../data/hotelsData';
import { useNavigation } from "@react-navigation/native";
import Categories from "../components/Categories";

 const restaurent = hotels[0];
//  console.log(restaurent);

const HomeScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [data, setData] = useState([]);
  const navigation = useNavigation();

    return (
      <KeyboardAvoidingView style={{ flex: 1, marginTop: 25 }}>
        <ScrollView style={{ flex: 1 }}>
          <SafeAreaView>
           

           
            <View style={styles.container}>
              <EvilIcons
                style={{ marginRight: 10 }}
                name="search"
                size={28}
                color="#cb202d"
              />
              <TextInput
                style={{ fontSize: 18 }}
                placeholder="Restaurent name, cuisine, or a dish"
              />
            </View>
            <Categories/>
            <Pressable style={{ marginLeft: 5 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjnMjX8qQb9mLh_IBBHP90SZXccv6uTa662T2Ljfp2xrvNO5IrJmgeWC-RpS_Bxkfzak&usqp=CAU",
                  }}
                />
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://cdn.businesstraveller.com/wp-content/uploads/fly-images/1002269/zomato-infinity-dining-916x516-1-916x516.jpg",
                  }}
                />
              </View>
            </Pressable>
            <Text
              style={{
                margin: 10,
                fontSize: 20,
                fontWeight: "700",
                paddingLeft: 6,
              }}
            >
              Eat what makes you happy
            </Text>
            <Pressable>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 11,
                }}
              >
                <View style={{ margin: 6 }}>
                  <Image
                    style={styles.MiddleImage}
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZDb8hWL40qKbszAavTSLFkyOcAhvnPmgXw&usqp=CAU",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      color: "gray",
                      margin: 10,
                      textAlign: "center",
                    }}
                  >
                    Thalis
                  </Text>
                </View>

                <View style={{ margin: 8 }}>
                  <Image
                    style={styles.MiddleImage}
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2fIIZ5yHqkqXHgg9TuQuJ_mFZbINJLt1ODQ&usqp=CAU",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      color: "gray",
                      margin: 10,
                      textAlign: "center",
                    }}
                  >
                    Pizzas
                  </Text>
                </View>

                <View style={{ margin: 8 }}>
                  <Image
                    style={styles.MiddleImage}
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-SsbTrLAm9o9ABakjoILX9G5LIDNJnVwvA&usqp=CAU",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      color: "gray",
                      margin: 10,
                      textAlign: "center",
                    }}
                  >
                    Burger
                  </Text>
                </View>

                <View style={{ margin: 8 }}>
                  <Image
                    style={styles.MiddleImage}
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsC7uWf7rd0qrXk2zCpasTV8W-HCcr9JeKQ&usqp=CAU",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      color: "gray",
                      margin: 10,
                      textAlign: "center",
                    }}
                  >
                    Dosas
                  </Text>
                </View>
              </View>
            </Pressable>
            {/* <Hotels restaurent={restaurent}/> */}
            <FlatList
              data={hotels}
              renderItem={({ item }) => <Hotels restaurent={item} />}
            />
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 7,
    marginLeft: 9,
    marginTop: 10,
    marginRight: 9,
    backgroundColor: "#e7e7e7",
    borderColor: "#A0A0A0",
  },
  swipeable: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  swipeableText: {
    backgroundColor: "#F5F5F5",
    borderWidth: 1,
    borderColor: "#DCDCDC",
    borderRadius: 7,
    padding: 7,
    margin: 5,
  },
  image: {
    margin: 10,
    borderRadius: 10,
    width: 158,
    height: 158,
    aspectRatio: 5 / 3,
    resizeMode: "cover",
  },
  MiddleImage:{
    width:70,
    height:70,
    borderRadius:35,
    resizeMode:"cover",
  }
});