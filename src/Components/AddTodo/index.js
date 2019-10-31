// External Dependencies
import React from 'react';
import styled from 'styled-components'


// Styled Components

const TodoButton = styled.i({
    position: 'absolute',
    color: '#28fcbd',
    fontSize: '25px',
    margin: '0 1rem 1rem 0',
    
    '&:hover': {
        cursor: 'pointer',
        fontSize: '27px',
    },

    '&:active': {
        color: '#4ab4ff'
    },
})


// Component Definition
const AddTodo = (props) => {

    return (
        <TodoButton 
        className="fas fa-plus"
        onClick={props.createTodoButton}
        />
    )
}

export default AddTodo;