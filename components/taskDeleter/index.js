import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';

const TaskDeleter = ({ onDeleteTask }) => {
  const handleDeleteTask = () => {
    onDeleteTask();
  };

  return (
    <DeleteButton onPress={handleDeleteTask}>
      <DeleteButtonText>Delete</DeleteButtonText>
    </DeleteButton>
  );
};

const DeleteButton = styled.TouchableOpacity`
  background-color: #ff0000;
  padding: 5px 10px;
  border-radius: 5px;
`;

const DeleteButtonText = styled.Text`
  color: #fff;
`;

export default TaskDeleter;