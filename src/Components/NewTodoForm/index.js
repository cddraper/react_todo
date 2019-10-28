// External Dependencies
import React from 'react';
import styled from 'styled-components';


// Styled Components

const Form = styled.form({
    width: '400px',

})

const Input = styled.input({

})

const Add = styled.button({

})


// Component Definition

const NewTodoForm = () => {


    return (
        <Form>
            <Input type="text" />
            <Add type="submit" />
        </Form>
    )
}

export default NewTodoForm;
