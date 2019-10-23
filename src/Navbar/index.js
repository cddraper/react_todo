// External Dependencies
import React, { useState } from 'react';
import styled from 'styled-components';


// Styled Components
const Wrapper = styled.div({
    width: '100%',
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

})

const A = styled.a({
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: '500',
})

const Logo = styled.img({
    height: '60px',
    width: 'auto',
    margin: '5px',
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
    }
})})


// Component Definition
const Navbar = () => {

    const [navbarStatus, setNavbarStatus] = useState(false);

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