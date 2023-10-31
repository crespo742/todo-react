import React from 'react';
import styled from 'styled-components/native';
import ToDoList from './TodoList/index';

export default function App() {
  return (
    <AppContainer>
      <ToDoList />
    </AppContainer>
  );
}

const AppContainer = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
