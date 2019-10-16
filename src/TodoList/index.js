// External Dependencies
import React, { useState } from 'react';
import styled from 'styled-components';


const Ul = styled.ul`
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 0.5em auto 0 auto;
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


// Component Definition
const TodoList = () => {
    const [todos, setTodos] = useState([
      {
        content: 'Take out trash',
        isCompleted: true,
      },
      {
        content: 'Wash dishes',
        isCompleted: true,
      },
      {
        content: 'Complete todo app',
        isCompleted: false,
      }
    ]);


    return (
        <Ul>
          {todos.map((todo, i) => (
                <StyledDiv>
                    <Checkbox />
                    <Input 
                      type="text" 
                      value={todo.content}
                      
                    />
                </StyledDiv>
            ))}
        </Ul>
    )
}

export default TodoList;