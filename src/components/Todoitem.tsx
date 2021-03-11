import React from "react";
import {ListRenderItem, SafeAreaView, StyleSheet, Text, View} from "react-native";

export interface TodoItemI {
  id: number,
  title: string,
  userId: number,
  completed: boolean
}

export const TodoItem: React.FC<{data: TodoItemI}> = ({data}) => {
  return <SafeAreaView key={data.title} style={styles.item}>
    <Text>{data.id}</Text>
    <View>
      <Text>{data.title}</Text>
    </View>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  item: {
    padding: 5,
    borderWidth: 5,
    marginBottom: 5,
    borderColor: 'pink',
    backgroundColor: '#cacaca',
    color: '#333',
    fontWeight: "bold",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: 500,
  }
})
