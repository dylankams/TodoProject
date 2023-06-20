import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const TodoItem = ({ todo, deleteTodo, editTodo }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [editTodoText, setEditTodoText] = useState(todo.title);

  const handleEditTodo = () => {
    editTodo(todo.id, editTodoText);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Modifier le Todo..."
              value={editTodoText}
              onChangeText={setEditTodoText}
            />
            <TouchableOpacity style={styles.editButton} onPress={handleEditTodo}>
              <Text style={styles.editButtonText}>Enregistrer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.deleteButtonText}>Annuler</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.editIcon} onPress={() => setModalVisible(true)}>
        <FontAwesome name="pencil" size={20} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.todoTitle}>{todo.title}</Text>
      <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTodo(todo.id)}>
        <Text style={styles.deleteButtonText}>Supprimer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  editIcon: {
    backgroundColor: '#2196f3',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  todoTitle: {
    flex: 1,
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: '#ff5252',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  editButton: {
    backgroundColor: '#2196f3',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom: 10,
  },
  editButtonText: {
    color: '#fff',
  },
});

export default TodoItem;
