// External Dependencies
import React from 'react';
import styled from 'styled-components';

// Internal Dependencies
import Navbar from './Navbar/index';
import TodoList from './TodoList/index';

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
`

function App() {
  return (
    <Container>
      <Navbar />
      <TodoList />
    </Container>
  );
}

export default App;
