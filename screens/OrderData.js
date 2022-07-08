import React, { useEffect, useRef, useState,useContext } from 'react'
import { StyleSheet, Text, View, Image,ScrollView, TouchableOpacity, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import moment from "moment";
import { CartItems } from '../Context';


const OrderData = () => {
     
    const { cart, setCart } = useContext(CartItems);
    const [modal, setModal] = useState(false);
    const total = cart
      .map((item) => Number(item.price.replace("₹", "")))
      .reduce((prev, curr) => prev + curr, 0); 
    const route = useRoute();
    const restaurentName = route.params.restaurentName;
    const [tip,setTip] = useState(0);
    const date = moment().format("MMM Do YY"); 
    const time = moment().format("LT");
    const [seconds,setSeconds] = useState(10);
    useEffect(()=> {
       if (seconds > 0) {
         setTimeout(() => setSeconds(seconds - 1), 1000);
       } else {
         setSeconds("BOOOOM!");
       }
    },[]);
    return (
      <ScrollView
        showVerticalScrollbar={false}
        style={{ backgroundColor: "white", flex: 1,marginTop:36 }}
      >
        {/* <StatusBar style={{ backgroundColor: "red"}}/> */}
        <Text
          style={{
            color: "black",
            fontSize: 19,
            fontWeight: "bold",
            padding: 15,
            backgroundColor: "#FDEDEC",

            color: "#283747",
          }}
        >
          {restaurentName} has accepted your order at {time}
        </Text>

        <View
          style={{
            borderBottomColor: "#D0D0D0",
            borderBottomWidth: 1,
          }}
        />
        <View
          style={{
            borderBottomColor: "#D0D0D0",
            borderBottomWidth: 3,
          }}
        />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
              backgroundColor: "#ff0090",
              padding: 5,
              borderRadius: 7,
            }}
          >
            <MaterialIcons style={{}} name="timer" size={26} color="#f0fff0" />
            <Text
              style={{
                fontSize: 19,
                fontWeight: "700",
                paddingLeft: 7,
                color: "white",
              }}
            >
              Delivery in 30 mins
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
                paddingTop: 8,
                color: "#ff8080",
              }}
            >
              Food preparation will begin shortly
            </Text>
            <MaterialCommunityIcons
              style={{ marginLeft: 10 }}
              name="food-variant"
              size={28}
              color="#ff4d4d"
            />
          </View>
          {/* <CountDown
            style={{ marginTop: 10 }}
            until={60 * 40}
            timeToShow={["M", "S"]}
            digitTxtStyle={{ color: "#1CC625" }}
            digitStyle={{
              backgroundColor: "#FFF",
              borderWidth: 2,
              borderColor: "#1CC625",
            }}
            onPress={() => alert("hello")}
            size={20}
          /> */}

          <Image
            style={{
              width: 200,
              height: 200,
              backgroundColor: "white",
              marginVertical: 16,
            }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpDX04DyRkpYOMZbKFWf9DFV94SrafyNzpwG7nXG2QFcUqTGWmC0ISoM2uU5SUK4bQJw&usqp=CAU",
            }}
          />
        </View>
        <View
          style={{
            borderBottomColor: "#D0D0D0",
            borderBottomWidth: 3,
          }}
        />
        <View
          style={{ padding: 20, flexDirection: "row", alignItems: "center" }}
        >
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              borderColor: "#fff0f5",
              borderWidth: 1,
            }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLXBWH6Tl3ITRFCI-ByH7IR_c0gRQhRsXzQ&usqp=CAU",
            }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#ff6e4a" }}>
              4 valets near the restaurent
            </Text>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "#696969" }}>
              Anyone will pick your order
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "#D0D0D0",
            borderBottomWidth: 3,
          }}
        />
        <View style={{ padding: 20, flexDirection: "row" }}>
          <FontAwesome5 name="hand-holding-heart" size={28} color="#ff0080" />
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{ fontSize: 19, fontWeight: "bold", paddingHorizontal: 2 }}
            >
              Tip your hunger Saviour
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: "#696969",
                marginRight: 10,
                paddingHorizontal: 2,
              }}
            >
              Thank your delivery partner for helping you stay safe
              indoors.Support them through these tough times with a tip
            </Text>
            <Pressable
              style={{
                paddingTop: 20,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setTip(30)}
                style={{
                  backgroundColor: "#F5F5F5",
                  marginHorizontal: 10,
                  paddingHorizontal: 10,
                  borderRadius: 7,
                }}
              >
                <Text
                  style={{ padding: 10, color: "#002D62", fontWeight: "bold" }}
                >
                  ₹30
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setTip(50)}
                style={{
                  alignItems: "center",
                  backgroundColor: "#F5F5F5",
                  marginHorizontal: 10,
                  borderRadius: 7,
                  // paddingHorizontal: 10,
                }}
              >
                <Text
                  style={{ padding: 4, color: "#002D62", fontWeight: "bold" }}
                >
                  ₹50
                </Text>
                <Text
                  style={{
                    backgroundColor: "orange",
                    paddingHorizontal: 10,
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Most Tipped
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setTip(70)}
                style={{
                  backgroundColor: "#F5F5F5",
                  marginHorizontal: 10,
                  paddingHorizontal: 10,
                  borderRadius: 7,
                }}
              >
                <Text
                  style={{ padding: 10, color: "#002D62", fontWeight: "bold" }}
                >
                  ₹70
                </Text>
              </TouchableOpacity>
            </Pressable>
          </View>
        </View>
        {tip ? (
          <View>
            <Text
              style={{
                color: "#034694",
                padding: 10,
                marginLeft: 10,
                marginRight: 10,
                fontSize: 16,
                fontWeight: "600",
                fontFamily: "sans-serif-medium",
              }}
            >
              please pay {"₹"}
              {tip} to your delivery agent at the time of delivery
            </Text>
            <TouchableOpacity
              onPress={() => setTip(0)}
              activeOpacity={0.7}
              style={{
                padding: 10,
                marginLeft: 10,
                marginRight: 10,
                position: "absolute",
                top: 40,

                paddingBottom: 40,
              }}
            >
              <Text style={{ color: "red", fontSize: 14, fontWeight: "700" }}>
                (Cancel)
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}

        <Image
          style={{
            width: 190,
            height: 70,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 10,
          }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmig-j5FRIsSACRtZfq_bo-u5wiZiALBluOw&usqp=CAU",
          }}
        />
      </ScrollView>
    );
}

export default OrderData

const styles = StyleSheet.create({
  tbn: {
    color:"red"
  },
  btn: {
    borderWidth:2,
  }
})