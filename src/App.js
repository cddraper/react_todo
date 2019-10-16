// External Dependencies
import React from 'react';
import './app.css';
import styled from 'styled-components';

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

const Ul = styled.ul`
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: auto;
`

const Checkbox = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: gray;

  &:hover {
    background: lightgray;
    border: 1px solid white;
  }
`

const Input = styled.input`
  width: 80%;
  border-radius: 6px;
  border: 1px solid gray;
  outline: none;
  padding-left: 5px;
`

function App() {
  return (
    <Container>
        <Form>
          <Ul>
            <StyledDiv>
              <Checkbox />
              <Input type="text" value="Todo" />
            </StyledDiv>
          </Ul>
        </Form>
    </Container>
  );
}

export default App;
