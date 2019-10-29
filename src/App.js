// External Dependencies
import React, { useState } from 'react';
import styled from 'styled-components';
import uuid from 'uuid';

// Internal Dependencies
import Navbar from './Components/Navbar/index';
import NewTodoForm from './Components/NewTodoForm/index';
// import TodoList from './Components/TodoList/index';
import Footer from './Components/Footer/index';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
  margin: auto;
`

const Wrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  margin: '1rem',

})

const ListBox = styled.div({
  background: 'lightgray',
  padding: '2rem',
  width: '400px',
  height: 'auto',
  margin: '1rem',
})

const Title = styled.input({
  fontSize: '20px',
  border: 'none',
  background: 'none',
  outline: 'none',
})

const Ul = styled.ul({
  listStyle: 'none',
})

const Input = styled.input({

})

// Component Definition
function App() {

  const [todoList, setTodoList] = useState([
    {
      listName: 'Today',
      todos: [
        {
          id: uuid(),
          content: 'Wash dishes',
          isCompleted: true,
        },
        {
          id: uuid(),
          content: 'Complete todo app',
          isCompleted: true,
        },
        { 
          id: uuid(),
          content: 'Solve world hunger',
          isCompleted: false,
        }
      ]
    },
    {
      listName: 'This Week',
      todos: [
        {
          id: uuid(),
          content: 'Change tires',
          isCompleted: true,
        },
        {
          id: uuid(),
          content: 'Mow yard',
          isCompleted: true,
        },
        { 
          id: uuid(),
          content: 'finish budget',
          isCompleted: false,
        }
      ]
    },
  ])  


// NewTodoForm logic
const handleAddClick = (e, i) => {
  e.preventDefault();
  let newTodoList = [...todoList];
  newTodoList.push({
    listName: '',
    todos: [
      {
        id: uuid(),
        content: '',
        isCompleted: false,
      },
    ]
  });
  setTodoList(newTodoList);
}

const updateListName = (e, i) => {
  let newTodoList = [...todoList];
  newTodoList[i].listName = e.target.value;
  setTodoList(newTodoList);
}


// // TodoList logic
// const handleKeyDown = (e, i) => {
//   if(e.key === 'Enter'){
//       createTodo(e, i)
//   }
//   if(e.key === 'Backspace' && todos[i].content === ''){
//       deleteTodo(e, i)
//   }
// }

// const createTodo = (e, i) => {
//   const newTodos = [...todos];
//   newTodos.splice(i + 1, 0, {
//       id: uuid(),
//       content: '',
//       isCompleted: false,
//   })
//   setTodos(newTodos);
//   setTimeout(() => {
//       document.forms[1].elements[i + 1].focus()
//   }, 0);
// }

// const createTodoButton = () => {
//   const newTodos = [...todos];
//   console.log(newTodos);
//   newTodos.push({
//       id: uuid(),
//       content: '',
//       isCompleted: false,
//   });
//   setTodos(newTodos);
//   setTimeout(() => {
//       document.forms[1].elements[newTodos.length - 1].focus()
//   }, 0);
// }

// const deleteTodo = (e, i) => {
//   if(i === 0 && todos.length === 1) return;
//   const newTodos = todos.filter(todo => todo.id !== todos[i].id);
//   setTodos(newTodos);
//   if(i === 0) return;
//   setTimeout(() => {
//       document.forms[1].elements[i - 1].focus();
//   }, 0)
// }

// const deleteTodoButton = (e, i) => {
//   const newTodos = todos.filter(todo => todo.id !== todos[i].id);
//   setTodos(newTodos);
// }

const updateTodo = (e, i, j) => {
  const newTodoList = [...todoList];
  newTodoList[i].todos[j].content = e.target.value
  setTodoList(newTodoList);
}

// const toggleTodo = (e, i) => {
//   const newTodos = [...todos];
//   newTodos[i].isCompleted = !newTodos[i].isCompleted;
//   setTodos(newTodos);
//   console.log(todos);
// }

  return (
    <Container>
      <Navbar />
      <NewTodoForm handleAddClick={handleAddClick}/>
      <Wrapper>
        {todoList.map((list, i) => (
          <ListBox>
            <Title 
            value={list.listName}
            onChange={e => updateListName(e, i)} />
            <Ul>
              {list.todos.map((todo, j) => (
                <Input 
                value={todo.content}
                onChange={e => updateTodo(e, i, j)} />
              ))}
            </Ul>
          </ListBox>
        ))}
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default App;
