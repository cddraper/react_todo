// External Dependencies
import React from 'react';
import styled from 'styled-components';

// Internal Dependencies
import Navbar from './Components/Navbar/index';
import Footer from './Components/Footer/index';


// Styled Components
const Wrapper = styled.div({
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
})

const TextContainer = styled.div({
    background: 'rgba(255, 255, 255, 0.6)',
    height: 'auto',
    width: '90%',
    fontFamily: 'Raleway, sans-serif',
    padding: '3rem 3rem 1rem 3rem',
})

const Q = styled.p({
    color: '#6342f5',
    fontSize: '18px',
    fontWeight: '500',
})

const A = styled.p({
    color: '#6342f5',
    margin: '1rem 0 2rem 1rem',
    fontStyle: 'italic',
})

// Component Definition
function FAQ() {


    return (
        <Wrapper >
            <Navbar />
            <TextContainer>
                <Q>How do you add new todo lists?</Q>
                <A>Enter the name of the list in the "Add a new todo list" box and then click "Add List"</A>
                <Q>How do you add new todos?</Q>
                <A>You can add new todos by clicking the "+" button or by pressing the "enter" key</A>
                <Q>How do you delete todos?</Q>
                <A>You can delete todos by clicking the trash can icon next to each todo, or by pressing the "backspace" key if the todo is blank</A>
                <Q>How do you delete todo lists?</Q>
                <A>To delete an entire todo list, click the trash can icon in the upper right corner or the list</A>
                <Q>How do I recover todos or lists that I deleted accidentally?</Q>
                <A>Unfortunately once you delete the todos and todo lists, they are deleted permanently</A>
            </TextContainer>
            <Footer />
        </Wrapper>
    )
}

export default FAQ;