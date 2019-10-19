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
