import React, { useState } from 'react';
import {FlatList, ListRenderItem, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {TodoItem, TodoItemI} from "./Todoitem";

export type TodoListI = TodoItemI[]

export const TodoList: React.FC<{data: TodoListI}> = ({data}) => {
  const [state, setState] = useState(data)
  const onCLickItem = (id: number) => {
    const newData = state.filter(item=> item.id !== id)
    setState(newData)
  }
  return <>{state.map(item=><TodoItem key={item.id} data={item} onCLickItem={onCLickItem}/>)}</>
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
