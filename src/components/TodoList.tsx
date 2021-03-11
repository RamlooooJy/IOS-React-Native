import React from "react";
import {FlatList, ListRenderItem, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {TodoItem, TodoItemI} from "./Todoitem";

export type TodoListI = TodoItemI[]

export const TodoList: React.FC<{data: TodoListI}> = ({data}) => {
  return <>{data.map(item=><TodoItem key={item.id} data={item}/>)}</>
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
    maxWidth: 500,
  }
})
