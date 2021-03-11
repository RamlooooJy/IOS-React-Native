import React, {useEffect, useState} from "react";
import {Button, FlatList, SafeAreaView, View} from "react-native";
import {TodoItem, TodoItemI} from "../components/Todoitem";
import {todoModel} from "../models/todo.model";


export const Home: React.FC = () => {
  const [tags, setTags] = useState<TodoItemI[]>([])
  useEffect(() => {
    const apiGet = async (numberOfTodo?: number) => {
      const something = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${numberOfTodo || 5}`)
      const result = await something.json() as TodoItemI[]
      setTags(result || [])
    }
    todoModel.apiGetNew = apiGet
    apiGet()
  }, [])

  const onPress = () => {
    const random = Math.floor(Math.random() * 15)
    todoModel.apiGetNew && todoModel.apiGetNew(random)

  }
  return (<View>
    <Button onPress={onPress} title={'get new options'}/>
    <SafeAreaView>
      <FlatList data={tags} keyExtractor={item => item.id.toString()} renderItem={
        ({item}) => <TodoItem key={item.id} data={item}/>
      }/>
    </SafeAreaView>
  </View>)
}
