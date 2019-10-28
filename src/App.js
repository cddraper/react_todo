// External Dependencies
import React from 'react';
import styled from 'styled-components';

// Internal Dependencies
import Navbar from './Components/Navbar/index';
import NewTodoForm from './Components/NewTodoForm/index';
import TodoList from './Components/TodoList/index';
import Footer from './Components/Footer/index';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
  margin: auto;
`

function App() {
  return (
    <Container>
      <Navbar />
      <TodoList />
      <Footer />
    </Container>
  );
}

export default App;
