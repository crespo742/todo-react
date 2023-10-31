import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import styled from 'styled-components/native';
import TaskAdder from '../components/taskAdder';
import TaskDeleter from '../components/taskDeleter';
import TaskCompleter from '../components/taskCompleter';

const ToDoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    // Implement the logic to mark the task as completed (e.g., set a property in the task object).
    // You may need to maintain a list of tasks as objects with a 'completed' property.
  };

  return (
    <Container>
      <Title>ToDo List</Title>
      <TaskAdder onAddTask={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TaskItem>
            <TaskText>{item}</TaskText>
            <TaskDeleter onDeleteTask={() => removeTask(index)} />
            <TaskCompleter onCompleteTask={() => completeTask(index)} />
          </TaskItem>
        )}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 10px;
`;

const TaskItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin: 5px;
  border: 1px solid #ccc;
`;

const TaskText = styled.Text`
  font-size: 18px;
`;

export default ToDoList;
