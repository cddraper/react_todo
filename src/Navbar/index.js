// External Dependencies
import React, { useState } from 'react';
import styled from 'styled-components';


// Styled Components
const Wrapper = styled.div({
    width: '100%',
    height: '80px',
})

const Nav = styled.nav((props) => {
    return ({
    display: 'grid',
    transform: props.navbarStatus ? 'none' : 'scale(1,0)',
    transformOrigin: 'top center',
    transition: 'transform ease-in-out 0.3s',
    gridTemplateColumns: '25% 50% 25%',
    alignItems: 'center',
    height: '80px',
    width: '100%',
    background: 'rgba(120, 114, 114, 0.45)',
    position: 'fixed',
})})

const Ul = styled.ul({
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'space-around',
    fontFamily: 'Raleway, sans-serif',
})

const Li = styled.li({
    // borderBottom: '2px solid transparent',

    // '&:hover': {
    //     borderBottom: '2px solid white',
    //     transform: 'scaleY(1)',
    //     transformOrigin: 'center',
    //     transition: 'borderBottom 0.5s ease-in',
    // }
})

const A = styled.a({
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: '500',

    '::after': {
        content: '""',
        height: '2px',
        width: '100%',
        background: 'white',
        display: 'block',
        marginTop: '4px',
        visibility: 'hidden',
        transform: 'scaleX(0)',
        transition: '0.3s',
    },

    '&:hover::after': {
        content: '""',
        height: '2px',
        width: '100%',
        background: 'white',
        display: 'block',
        marginTop: '4px',
        transform: 'scaleX(1)',
        visibility: 'visible',
    },
})

const Logo = styled.img({
    height: '60px',
    width: 'auto',
    margin: '5px 20px',
    borderRadius: '50%',
    border: 'solid black 2px',
})

const Hamburger = styled.i((props) => {
    return({
    justifySelf: 'flex-end',
    fontSize: '32px',
    margin: '1rem',
    color: 'white',
    position: 'fixed',
    top: '0.5rem',
    right: '0.5rem',
    transform: props.navbarStatus ? 'rotate(-0.25turn)' : 'none',
    transition: 'transform 0.3s',

    '&:hover': {
        cursor: 'pointer',
        color: '#eaff73',
    }
})})


// Component Definition
const Navbar = () => {

    const [navbarStatus, setNavbarStatus] = useState(true);

    const toggleNavbar = () => {
        let toggledStatus = !navbarStatus;
        setNavbarStatus(toggledStatus);
    }
    console.log(navbarStatus);

    return (
        <Wrapper>
            <Nav navbarStatus={navbarStatus}>
                <Logo src='checklogonoborder.png' alt="logo" />
                <Ul>
                    <Li><A href='#'>Home</A></Li>
                    <Li><A href='#'>Todo List</A></Li>
                    <Li><A href='#'>FAQ</A></Li>
                </Ul>
            </Nav>
            <Hamburger 
            navbarStatus={navbarStatus} 
            onClick={toggleNavbar} 
            className='fas fa-bars' 
            />
        </Wrapper>
    )
}

export default Navbar;
