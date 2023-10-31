import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import styled from 'styled-components/native';

const AddTaskButton = styled.Button``;

const TaskAdder = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task) {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <AddTaskContainer>
      <AddTaskInput
        placeholder="Add a task..."
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <AddTaskButton title="Add" onPress={handleAddTask} />
    </AddTaskContainer>
  );
};

const AddTaskContainer = styled.View`
  margin: 10px;
  flex-direction: row;
`;

const AddTaskInput = styled.TextInput`
  flex: 1;
  border: 1px solid #ccc;
  padding: 10px;
`;

export default TaskAdder;