// External Dependencies
import React from 'react';
import styled from 'styled-components';

// Internal Dependencies
import Navbar from './Components/Navbar/index';
import Footer from './Components/Footer/index';
import img from './assets/photos/landing.jpg';


// Styled Components
const Wrapper = styled.div({
    display: 'flex',
    flexFlow: 'column',
})

const Image = styled.div`
    height: 600px;
    width: 100%;
    background-image: url(${img});
    background-size: cover;
    background-position: center;

`

// Component Definition
function LandingPage() {


    return (
        <Wrapper >
            <Navbar />
            <Image />
            <Footer />
        </Wrapper>
    )
}

export default LandingPage;