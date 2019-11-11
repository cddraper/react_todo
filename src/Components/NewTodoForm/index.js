// External Dependencies
import React from 'react';
import styled from 'styled-components';

// Styled Components

const Form = styled.form({
    display: 'flex',
    flexFlow: 'column',
    width: '400px',
    background: '#337eff',
    justifyContent: 'space-around',
    padding: '1rem',
    margin: '2rem auto 1rem auto',
    fontFamily: 'Raleway, sans-serif',
    textAlign: 'center',
    borderRadius: '5px',
    border: '2px solid white',

})

const Header = styled.h2({
    display: 'block',
    fontSize: '18px',
})

const Input = styled.input({
    padding: '5px 5px 5px 10px',
    outline: 'none',
    margin: '1rem',
    borderRadius: '5px',
    border: 'none',
    fontFamily: 'Raleway, sans-serif',
})

const Add = styled.button({
    fontFamily: 'Raleway, sans-serif',
    fontWeight: '500',
    width: '80px',
    alignSelf: 'center',
    borderRadius: '5px',
    border: 'none',
    padding: '0.5rem',
    outline: 'none',
    background: '#ffefa6',

    '&:hover': {
        cursor: 'pointer',
    },

    '&:active': {
        background: '#f2d966',
        // color: 'gray',
    },
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
