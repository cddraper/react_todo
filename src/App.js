// External Dependencies
import React, { useState } from 'react';
import styled from 'styled-components';
import uuid from 'uuid';

// Internal Dependencies
import Navbar from './Components/Navbar/index';
import NewTodoForm from './Components/NewTodoForm/index';
// import TodoList from './Components/TodoList/index';
import AddTodo from './Components/AddTodo/index';
import Footer from './Components/Footer/index';

const Container = styled.div({
  display: 'flex',
  flexFlow: 'column',
})

const Wrapper = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 400px)',
  gridTemplateRows: 'repeat(200px)',
  alignItems: 'flex-start',
  justifyContent: 'space-around',
  margin: '1rem 1rem 2.25rem 1rem',

  '@media screen and (max-width: 700px)': {
    gridTemplateColumns: '400px',
  },

})

const ListBox = styled.form({
  width: '400px',
  display: 'flex',
  flexFlow: 'column',
  borderRadius: '5px',
  background: 'rgba(84 , 13 , 166 , 0.5)',
  border: '2px solid white',
  margin: '1.25rem 0',
  padding: '1rem',
})

const Title = styled.input({
  fontSize: '20px',
  fontFamily: 'Raleway, sans-serif',
  fontWeight: '700',
  textAlign: 'center',
  alignSelf: 'center',
  border: 'none',
  background: 'none',
  outline: 'none',
  margin: '0.4rem 0',
})

const Ul = styled.ul({
  listStyle: 'none',
})

const TodoWrapper = styled.div({
  display: 'flex',
  margin: '7px',
  justifyContent: 'center',
})

const Checkbox = styled.div({
  width: '23px',
  height: '23px',
  borderRadius: '50%',
  marginRight: '10px',
  border: '1px solid white',
  padding: '2px',

  '&:hover': {
      background: '#a46dd1',
      cursor: 'pointer',
  }
})

const Checkmark = styled.i((props) => ({
  color: '#e8ed8a',
  fontSize: '16px',
  display: props.isCompleted ? 'block' : 'none',
}))

const Input = styled.input((props) => {
    
  return ({
  width: '80%',
  borderRadius: '5px',
  border: 'none',
  outline: 'none',
  paddingLeft: '5px',
  background: '#c3a6e3',
  fontFamily: 'Raleway, sans-serif',
  fontWeight: '500',
  fontSize: '18px',
  textDecoration: props.isCompleted ? 'line-through' : 'none',
})})

const DeleteButton = styled.i({
  color: 'rgba(84, 13, 166, 0.5)',
  fontSize: '16px',
  padding: '4px',
  borderRadius: '3px',
  marginLeft: '10px',

  '&:hover': {
      background: '#f54636',
      cursor: 'pointer',
      color: 'white',
  }
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

const createTodoButton = (e, i) => {
  const newTodoList = [...todoList];
    newTodoList[i].todos.push({
      id: uuid(),
      content: '',
      isCompleted: false,
  });
  setTodoList(newTodoList);
  setTimeout(() => {
      document.forms[i + 1].elements[newTodoList[i].todos.length].focus()
  }, 0);
}

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

const deleteTodoButton = (e, i, j) => {
  const newTodoList = [...todoList];
  const newTodos = newTodoList[i].todos.filter(todo => todo.id !== newTodoList[i].todos[j].id);
  newTodoList[i].todos = newTodos;
  setTodoList(newTodoList);
}

const updateTodo = (e, i, j) => {
  const newTodoList = [...todoList];
  newTodoList[i].todos[j].content = e.target.value
  setTodoList(newTodoList);
}

const toggleTodo = (e, i, j) => {
  const newTodoList = [...todoList];
  newTodoList[i].todos[j].isCompleted = !newTodoList[i].todos[j].isCompleted;
  setTodoList(newTodoList);
  console.log(todoList[i].todos[j]);
}

  return (
    <Container>
      <Navbar />
      <NewTodoForm handleAddClick={handleAddClick}/>
      <Wrapper>
        {todoList.map((list, i) => (
          <ListBox key={list.id}>
            <AddTodo createTodoButton={e => createTodoButton(e, i)} />
            <Title 
            value={list.listName}
            onChange={e => updateListName(e, i)} />
            <Ul>
              {list.todos.map((todo, j) => (
                <TodoWrapper key={todo.id}>
                  <Checkbox 
                  onClick={e => toggleTodo(e, i, j)} 
                  >
                    <Checkmark 
                      className="fas fa-check" 
                      isCompleted={todo.isCompleted}
                      />
                  </Checkbox>
                  <Input 
                  isCompleted={todo.isCompleted}
                  value={todo.content}
                  onChange={e => updateTodo(e, i, j)}
                  onKeyDown={e => handleKeyDown(e, i, j)} 
                  />
                  <DeleteButton
                  className="fas fa-trash-alt" 
                  onClick={e => deleteTodoButton(e, i, j)}
                  />
                </TodoWrapper>
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
