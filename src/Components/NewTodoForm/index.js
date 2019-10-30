// External Dependencies
import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components

const Form = styled.form({
    display: 'flex',
    flexFlow: 'column',
    width: '400px',
    background: 'lightgray',
    justifyContent: 'space-around',
    padding: '1rem',
    margin: '1rem auto',

})

const Header = styled.h2({
    display: 'block',
    fontSize: '18px',
})

const Input = styled.input({
    paddingLeft: '5px',
})

const Add = styled.button({

})


// Component Definition

const NewTodoForm = (props) => {

    // const [todoList, setTodoList] = useState([
    //     {
    //     listName: 'Today',
    //     todos: [
    //         {
    //             id: uuid(),
    //             content: 'Wash dishes',
    //             isCompleted: true,
    //         },
    //         {
    //             id: uuid(),
    //             content: 'Complete todo app',
    //             isCompleted: true,
    //         },
    //         {   id: uuid(),
    //             content: 'Solve world hunger',
    //             isCompleted: false,
    //         }
    //     ]
    //     },
    // ])  

    return (
        <Form>
            <Header>Add a new Todo list</Header>
            <Input type="text" placeholder="List name..." />
            <Add 
            type="submit"
            onClick={props.handleAddClick}
            >
                Add List
            </Add>
        </Form>
    )
}

export default NewTodoForm;
