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

const Form = styled.form`
  width: 400px;
  background: lightgray;
  padding: 2em;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  background: rgba(84, 13, 166, 0.6);
  border: 2px solid white;
`

function App() {
  return (
    <Container>
      <Form>
        <TodoList />
      </Form>
    </Container>
  );
}

export default App;
