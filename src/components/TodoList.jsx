import React from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, editTodo }) => {
  const renderItem = ({ item }) => (
    <TodoItem todo={item} deleteTodo={deleteTodo} editTodo={editTodo} />
  );

  return (
    
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
  todoTitle: {
    fontSize: 16,
  },
  deleteButtonText: {
    color: '#ff5252',
  },
});

export default TodoList;
