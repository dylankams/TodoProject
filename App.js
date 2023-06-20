import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import TodoList from './src/components/TodoList';
import TodoInput from './src/components/TodoInput';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Faire les courses' },
    { id: 2, title: 'Aller à la salle de sport' },
    { id: 3, title: 'Apprendre React Native' },
    { id: 4, title: 'Apprendre NodeJS' },
    { id: 5, title: 'Apprendre React' },
  ]);

  const addTodo = (todoTitle) => {
    if (todoTitle.trim()) {
      const newTodo = {
        id: Math.random().toString(),
        title: todoTitle,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    }
  };

  const deleteTodo = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const editTodo = (todoId, newTitle) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, title: newTitle };
        }
        return todo;
      })
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/todo-background-image.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.todoListContainer}>
          <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
        </View>
        <TodoInput addTodo={addTodo} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  todoListContainer: {
    marginTop: 60,
  },
});

export default App;
