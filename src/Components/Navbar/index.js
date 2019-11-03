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

})

const A = styled.a((props) => {
    
    return({
    color: document.URL === props.href ? '#eaff73' : 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: '500',

    '::after': {
        content: '""',
        height: '2px',
        width: '100%',
        background: document.URL === props.href? '#eaff73' : 'white',
        display: 'block',
        marginTop: '4px',
        visibility: document.URL === props.href? 'visible' : 'hidden',
        transform: document.URL === props.href? 'scaleX(1)' : 'scaleX(0)',
        transition: '0.3s',
    },

    '&:hover::after': {
        content: '""',
        height: '2px',
        width: '100%',
        background: document.URL === props.href? '#eaff73' : 'white',
        display: 'block',
        marginTop: '4px',
        transform: 'scaleX(1)',
        visibility: 'visible',
    },
})})

const LogoWrapper = styled.div({
    display: 'flex',
    height: '100%',
    alignItems: 'center',
})

const Logo = styled.img({
    height: '60px',
    width: '60px',
    margin: '5px 5px 5px 20px',
    borderRadius: '50%',
    border: 'solid black 1px',
})

const LogoText = styled.p({
    color: 'white',
    fontSize: '20px',
    fontFamily: 'Kalam',
})

const LogoTextWrapper = styled.div({
    display: 'flex',
    flexFlow: 'column',
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
    // console.log(navbarStatus);

    return (
        <Wrapper>
            <Nav navbarStatus={navbarStatus}>
                <LogoWrapper>
                    <Logo src='checklogov2.png' alt="logo" />
                    <LogoTextWrapper>
                        <LogoText>Todo</LogoText>
                        <LogoText>List</LogoText>
                    </LogoTextWrapper>
                </LogoWrapper>
                <Ul>
                    <Li><A href='http://localhost:3000/home'>Home</A></Li>
                    <Li><A href='http://localhost:3000/'>Todo List</A></Li>
                    <Li><A href='http://localhost:3000/faq'>FAQ</A></Li>
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
