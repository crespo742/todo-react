import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';

const TaskCompleter = ({ onCompleteTask }) => {
  const handleCompleteTask = () => {
    onCompleteTask();
  };

  return (
    <CompleteButton onPress={handleCompleteTask}>
      <CompleteButtonText>Terminer</CompleteButtonText>
    </CompleteButton>
  );
};

const CompleteButton = styled.TouchableOpacity`
  background-color: #008000;
  padding: 5px 10px;
  border-radius: 5px;
`;

const CompleteButtonText = styled.Text`
  color: #fff;
`;

export default TaskCompleter;