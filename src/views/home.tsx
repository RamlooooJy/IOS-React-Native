import React, {useEffect, useState} from "react";
import {ActivityIndicator, Button, FlatList, SafeAreaView, ScrollView, View} from "react-native";
import {TodoItem, TodoItemI} from "../components/Todoitem";
import {todoModel} from "../models/todo.model";
import {TodoList} from "../components/TodoList";

export const Home: React.FC = () => {
  const [tags, setTags] = useState<TodoItemI[]>([])
  useEffect(() => {
    const apiGet = async (numberOfTodo?: number) => {
      setTags([])
      const something = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${numberOfTodo || 52}`)
      const result = await something.json() as TodoItemI[]
      setTimeout(() => setTags(result || []), 1000)

    }
    todoModel.apiGetNew = apiGet
    apiGet()
  }, [])

  const onPress = () => {
    const random = Math.floor(Math.random() * 25)
    todoModel.apiGetNew && todoModel.apiGetNew(random)

  }
  return (<View>
    <View>
      <Button color={'red'} onPress={onPress} title={'GET NEW TODOS'}/>
    </View>
    <View>
      {tags.length ?
        <TodoList data={tags}/>
        : <ActivityIndicator size="large" color={'red'}/>
      }
    </View>
  </View>)
}
