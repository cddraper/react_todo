// External Dependencies
import React from 'react';
import styled from 'styled-components';


// Internal Dependencies
import './app.css';
import TodoList from './TodoList/index';



const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Form = styled.form`
  background: lightgray;
  border-radius: 5px;
  padding: 2em;
  width: 25vw;
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
