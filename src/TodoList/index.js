// External Dependencies
import React, {useState} from 'react';
import styled from 'styled-components';


// Styled Components
const Ul = styled.ul`
    width: 100%;
`

const Wrapper = styled.div`
    display: flex;
    margin: 7px;
    justify-content: center;
`

const Checkbox = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 5px;
    border: 1px solid white;
    padding: 2px;

    &:hover {
        background: #a46dd1;
        cursor: pointer;
    }
`

const Input = styled.input`
    width: 80%;
    border-radius: 5px;
    border: none;
    outline: none;
    padding-left: 5px;
    background: #c3a6e3;
`

const I = styled.i`
    color: #e8ed8a;
`


// Component Definition
const TodoList = () => {
    const [todos, setTodos] = useState([
        {
            content: 'Take out the trash',
            isCompleted: true,
        },
        {
            content: 'Wash the dishes',
            isCompleted: false,
        }
    ]);


    const handleKeyDown = (e, i) => {
        if(e.key === 'Enter'){
            createTodo(e, i)
        }
        if(e.key === 'Backspace' && todos[i].content === ''){
            deleteTodo(e, i)
        }
    }

    const createTodo = (e, i) => {
        const newTodos = [...todos];
        newTodos.splice(i + 1, 0, {
            content: '',
            isCompleted: false,
        })
        setTimeout(() => {
            document.forms[0].elements[i + 1].focus()
        }, 0);
        setTodos(newTodos);
    }

    const deleteTodo = (e, i) => {
        if(i === 0 && todos.length === 1) return;
        const newTodos = todos.slice(0, i).concat(todos.slice(i + 1, todos.length));
        setTodos(newTodos);
        if(i === 0) return;
        setTimeout(() => {
            document.forms[0].elements[i - 1].focus();
        }, 0)
    }

    const updateTodo = (e, i) => {
        const newTodos = [...todos];
        newTodos[i].content = e.target.value
        setTodos(newTodos);
    }

    const toggleTodo = (e, i) => {
        const newTodos = [...todos];
        newTodos[i].isCompleted = !newTodos[i].isCompleted;
        setTodos(newTodos);
        console.log(todos);
    }


    return (
        <Ul>
            {todos.map((todo, i) => (
                <Wrapper key={i}>
                    <Checkbox onClick={e => toggleTodo(e, i)}>
                        <I 
                        className="fas fa-check" 
                        style={{display: todo.isCompleted ? 'block' : 'none'}}
                        />
                    </Checkbox>
                    <Input 
                    value={todo.content} 
                    onKeyDown={e => handleKeyDown(e, i)}
                    onChange={e => updateTodo(e, i)}
                    style={{textDecoration: todo.isCompleted ? 'line-through' : 'none'}}
                    />
                </Wrapper>
            ))}
        </Ul>
    )
}

export default TodoList;
