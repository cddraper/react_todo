// External Dependencies
import React from 'react';
import styled from 'styled-components';


// Styled Components

const Wrapper = styled.div({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    width: '100%',
    background: 'rgba(120, 114, 114, 0.25)',
    padding: '1rem',
    fontFamily: 'Raleway, sans-serif',
})

const Section = styled.div({

})

const Title = styled.p({
    color: '#0a5494',
    fontWeight: '500',
})

const Ul = styled.ul({
    color: '#0a5494',
    fontSize: '14px',
    listStyle: 'none',
})

const Li = styled.li({
    marginTop: '5px',
    paddingLeft: '1px',
})

const Info = styled.div({
    display: 'flex',
    alignItems: 'flex-end',
    height: '100%',
    color: '#0a5494',
    fontSize: '14px',
})

const I = styled.i({
    fontSize: '24px',
    padding: '10px 5px 0 1px',
    color: '#0a5494',
})



// Componenet Definition

const Footer = () => {


    return (
        <Wrapper>
            <Section>
                <Title>About</Title>
                <Ul>
                    <Li>Todolist Inc</Li>
                    <Li>FAQ</Li>
                </Ul>
            </Section>
            <Section>
                <Title>Contact</Title>
                <Ul>
                    <Li>info@todolist.com</Li>
                    <Li>(555) 555-5555</Li>
                </Ul>
            </Section>
            <Section>
                <Title>Follow Us</Title>
                <Ul>
                    <I className="fab fa-facebook-square" />
                    <I className="fab fa-linkedin" />
                    <I className="fab fa-twitter-square" />
                </Ul>
            </Section>
            <Section>
                <Info>copyright 2019 Todolist Inc.</Info>
            </Section>
        </Wrapper>
    )
}

export default Footer;
