// External Dependencies
import React from 'react';
import styled from 'styled-components';

// Internal Dependencies
import Navbar from './Components/Navbar/index';
import Footer from './Components/Footer/index';
import img from './assets/photos/landing.jpg';


// Styled Components
const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    height: 100vh;
    background-image: url(${img});
    background-size: cover;
    background-position: center;
`

const Subheader = styled.div({
    height: '600px',
    width: '100%',
    margin: '70px auto',
    background: 'rgba(120, 114, 114, 0.45)',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
})

const P = styled.p({
    fontFamily: 'Raleway, sans-serif',
    color: 'white',
    fontWeight: '500',
    
})

const A = styled.a({
    textDecoration: 'none',
    color: 'white',
    fontFamily: 'Raleway, sans-serif',
    border: '2px solid white',
    borderRadius: '10px',
    padding: '1rem',

    '&:hover': {
        color: '#eaff73',
        border: '2px solid #eaff73',
    },

    '&:active': {
        color: 'gray',
        border: '2px solid gray',
    },
})

const Buffer = styled.div`
    height: 800px;
    width: 100%;
`

// Component Definition
function LandingPage() {


    return (
        <Wrapper >
            <Navbar />
            <Subheader>
                <P>Increase your productivity by keeping track of your most important tasks, organized in custom lists that you create.</P>
                <A href="http://localhost:3000/">Get Started</A>
            </Subheader>
            <Buffer />
            <Footer />
        </Wrapper>
    )
}

export default LandingPage;