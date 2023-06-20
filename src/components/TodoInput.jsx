import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const TodoInput = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    if (todoText.trim()) {
      addTodo(todoText);
      setTodoText('');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Ajouter une tâche..."
        value={todoText}
        onChangeText={setTodoText}
      />
      <Button title="Ajouter" onPress={handleAddTodo} />
    </View>
  );
};

export default TodoInput;
