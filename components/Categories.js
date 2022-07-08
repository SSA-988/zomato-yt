import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const items = [
    {
        id:"1",
        name:"fastest delivery",
    },
    {
        id:"2",
        name:"rating 4.0+"
    },
    {
        id:"3",
        name:"offers",
    },
    {
        id:"4",
        name:"cuisines",
    },
    {
        id:"5",
        name:"MAX Safety",
    },
    {
        id:"6",
        name:"Pro",
    }
]

const Categories = () => {
    return (
      <View style={{ marginTop: 4, marginBottom: 5 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={items}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.8} style={{ marginTop: 5, }}>
              <View style={{ margin: 5, paddingLeft: 4 }}>
                <Text
                  style={{
                    backgroundColor: "blue",
                    padding: 5,
                    backgroundColor: "#ffe6e6",
                    borderWidth: 1,
                    borderColor: "#FF9999",
                    borderRadius: 6,
                    paddingHorizontal:8,
                  }}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
}

export default Categories

const styles = StyleSheet.create({})