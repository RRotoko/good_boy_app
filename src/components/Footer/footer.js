import React from 'react';
import styled from 'styled-components';
import Logo from '../../img/logo-new 1.png'

const Wrapper = styled.div `
    position: relative;
    display: grid;
    grid-template-columns: 34% 22% 22% 22%;
    width: 100%;
    margin: 100px 0px;
    background-color: var(---subtle);
`
const Line = styled.div `
    grid-column-start: 1 ;
    grid-column-end: 5;
    width:100%;
    height: 5px;
    margin: 50px 0px;
    background-color: var(--subtle)
`

const ImageLogo = styled.img `
    grid-column-start: 1;
    width: 60%;
`
const TextWrapper = styled.div `
    grid-column-start: ${props => props.first ? '2' :
        props.second ? '3' : '4'};
    display: flex;
    width: 50%;
    text-align: start;
    flex-direction: column;
`
const Link = styled.a `
    text-decoration: none;
    color: var(--primary);
    cursor:pointer
`
const Footer = () => {
    return(

        <Wrapper>
            <Line />
            <ImageLogo src={Logo} />
            <TextWrapper first>
                <h4> Nadácia Good boy</h4>
                <br/>
                <Link href='#'>O projekte</Link>
                <Link href='#'>Ako na to</Link>
                <Link href='#'>Kontakt</Link>
            </TextWrapper>
            <TextWrapper second>
                <h4> Nadácia Good boy</h4>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. </p>
            </TextWrapper>
            <TextWrapper third>
                <h4> Nadácia Good boy</h4>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. </p>
            </TextWrapper>
        </Wrapper>
    )
}

export default Footer;