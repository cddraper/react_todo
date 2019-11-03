// External Dependencies
import React from 'react';
import styled from 'styled-components';


// Styled Components

const Wrapper = styled.div({
    display: 'grid',
    flex: '0',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    width: '100%',
    background: 'rgba(120, 114, 114, 0.25)',
    padding: '1rem',
    fontFamily: 'Raleway, sans-serif',

    '@media screen and (max-width: 700px)': {
        gridTemplateColumns: '1fr 2fr 1fr 1.5fr',
    }
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

const A = styled.a({

})



// Componenet Definition

const Footer = () => {


    return (
        <Wrapper>
            <Section>
                <Title>About</Title>
                <Ul>
                    <Li>FAQ</Li>
                </Ul>
            </Section>
            <Section>
                <Title>Contact</Title>
                <Ul>
                    <Li>clayddraper@gmail.com</Li>
                </Ul>
            </Section>
            <Section>
                <Title>Follow</Title>
                <Ul>
                    <A href="https://github.com/cddraper" target="_blank" ><I className="fab fa-github-square" /></A>
                    <A href="https://www.linkedin.com/in/claydraper/" target="_blank" ><I className="fab fa-linkedin" /></A>
                    <A href="https://twitter.com/ClayDraper" target="_blank" ><I className="fab fa-twitter-square" /></A>
                </Ul>
            </Section>
            <Section>
                <Info>&copy; 2019 Todo List</Info>
            </Section>
        </Wrapper>
    )
}

export default Footer;
