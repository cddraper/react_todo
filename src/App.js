// External Dependencies
import React from 'react';
import styled from 'styled-components';

// Internal Dependencies
import TodoList from './TodoList/index';

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <Container>
      <TodoList />
    </Container>
  );
}

export default App;
