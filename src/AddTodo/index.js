// External Dependencies
import React from 'react';
import styled from 'styled-components'


// Styled Components

const TodoButton = styled.i({
    color: '#28fcbd',
    fontSize: '25px',
    margin: '1rem',
    
    '&:hover': {
        cursor: 'pointer',
    }
})


// Component Definition
const AddTodo = (props) => {

    return (
        <TodoButton 
        className="fas fa-plus"
        onClick={props.createTodo}
        />
    )
}

export default AddTodo;