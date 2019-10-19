// External Dependencies
import React, {useState} from 'react';
import styled from 'styled-components';


// Styled Components
const Ul = styled.ul`

`

const Wrapper = styled.div`
    display: flex;
    margin: 7px;
`

const Checkbox = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: gray;
    margin-right: 5px;

    &:hover {
        background: white;
    }
`

const Input = styled.input`

`

const I = styled.i`

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
            e.preventDefault();
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


    return (
        <Ul>
            {todos.map((todo, i) => (
                <Wrapper key={i}>
                    <Checkbox>
                        <I />
                    </Checkbox>
                    <Input 
                    value={todo.content} 
                    onKeyDown={e => handleKeyDown(e, i)}
                    onChange={e => updateTodo(e, i)}
                    />
                </Wrapper>
            ))}
        </Ul>
    )
}

export default TodoList;
