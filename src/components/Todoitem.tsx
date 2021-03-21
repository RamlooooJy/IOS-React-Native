import React from 'react';
import { Button, ListRenderItem, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export interface TodoItemI {
  id: number,
  title: string,
  userId: number,
  completed: boolean
}

export const TodoItem: React.FC<{ data: TodoItemI, onCLickItem: (id: number) => void }> =
  ({data, onCLickItem}) => {
    const onClick = () => {
      onCLickItem(data.id)
    }
    
    return <SafeAreaView key={data.title} style={styles.item}>
      <Text>{data.id}</Text>
      <View>
        <Text>{data.title}</Text>
        <Button title={'delete'} color={'darkred'} onPress={onClick}/>
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
    fontWeight: 'bold',
    maxWidth: 500
  }
})
