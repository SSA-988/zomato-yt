// import { StyleSheet, Text, View, Pressable } from "react-native";
// import React from "react";
// import { CartItems } from "./Context";
// import { useContext } from "react";

// const data = [
//   {
//     value: "icecreams",
//     id: 1,
//     price:100,
//   },
//   {
//     value: "biscuit",
//     id: 2,
//     price:80,
//   },
//   {
//     value: "chocolates",
//     id: 3,
//     price:40
//   },
// ];

// const Menu = () => {
//     const {cart,setCart} = useContext(CartItems);

//     const addToCart = (value) =>{
//         setCart([...cart,value]);
//     }
//     const removeFromCart = (value) => {
//         setCart(cart.filter((p) => p.id !== value.id));
//     }
//     console.log(cart,"cart items added");

//     console.log("no of items in the cart",cart.length)

//     const total = cart.reduce((acc,curr) => {
//         return acc + curr.price;
//     },0);

//     console.log(total);
//   return (
//     <View style={{ marginTop: 40, alignItems: "center" }}>
//       {data.map((value, index) => (
//         <Pressable style={{ margin: 10 }} key={index.id}>
//           <Text>{value.value}</Text>
//           <Text>{value.price}</Text>
//           <Pressable onPress={() => addToCart(value)}>
//             <Text>Add to cart</Text>
//           </Pressable>

//           <Pressable onPress={() =>removeFromCart(value)}>
//               <Text>Remove from cart</Text>
//           </Pressable>
//         </Pressable>
//       ))}
//     </View>
//   );
// };

// export default Menu;

// const styles = StyleSheet.create({});
