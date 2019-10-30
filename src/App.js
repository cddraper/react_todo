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
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 20%)',
  alignItems: 'flex-start',
  justifyContent: 'space-around',
  height: '100%',
  margin: '1rem',

})

const ListBox = styled.form({
  background: 'lightgray',
  padding: '2rem',
  width: '100%',
  height: 'auto',
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
  width: '100%',
})

// Component Definition
function App() {

  const [todoList, setTodoList] = useState([
    {
      id: uuid(),
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
      id: uuid(),
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
    listName: document.forms[0].elements[0].value,
    todos: [
      {
        id: uuid(),
        content: '',
        isCompleted: false,
      },
    ]
  });
  setTodoList(newTodoList);
  document.forms[0].elements[0].value = '';
}

const updateListName = (e, i) => {
  let newTodoList = [...todoList];
  newTodoList[i].listName = e.target.value;
  setTodoList(newTodoList);
}


// // TodoList logic
const handleKeyDown = (e, i, j) => {
  if(e.key === 'Enter'){
      createTodo(e, i, j)
  }
  if(e.key === 'Backspace' && todoList[i].todos[j].content === ''){
      deleteTodo(e, i, j)
      console.log('backspace');
  }
}

const createTodo = (e, i, j) => {
  const newTodoList = [...todoList];
  newTodoList[i].todos.splice(j + 1, 0, {
      id: uuid(),
      content: '',
      isCompleted: false,
  })
  setTodoList(newTodoList);
  setTimeout(() => {
      document.forms[i + 1].elements[j + 2].focus()
  }, 0);
}

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

const deleteTodo = (e, i, j) => {
  if(j === 0 && todoList[i].todos.length === 1) return;
  const newTodoList = [...todoList];
  const newTodos = todoList[i].todos.filter(todo => todo.id !== todoList[i].todos[j].id);
  newTodoList[i].todos = newTodos;
  setTodoList(newTodoList);
  if(j === 0) return;
  setTimeout(() => {
      document.forms[i + 1].elements[j].focus();
  }, 0);
}

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
          <ListBox key={list.id}>
            <Title 
            value={list.listName}
            onChange={e => updateListName(e, i)} />
            <Ul>
              {list.todos.map((todo, j) => (
                <div key={todo.id}>
                  <Input 
                  value={todo.content}
                  onChange={e => updateTodo(e, i, j)}
                  onKeyDown={e => handleKeyDown(e, i, j)} 
                  />
                </div>
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
