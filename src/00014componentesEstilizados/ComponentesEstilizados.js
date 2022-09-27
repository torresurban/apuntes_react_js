import React from 'react'
import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from 'styled-components'


let mainColor = '#db7093',
    mainAlphaColor80 ='#db709380'

const setTransitionTime = (time) => `all ${time} ease-in-out`

const fadeIn = keyframes`
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
    }
`;

const light = {
    color:'#222',
    bgColor:'#DDD',
}

const dark = {
    color:'#DDD',
    bgColor:'#222',
}

const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color:${({theme}) => theme.color};
    background-color:${({theme}) => theme.bgColor}
`;

const BoxRounded = styled(Box)`
    border-radius: 1rem;
`;

const GlobalStyle = createGlobalStyle`
    h2 {
      padding: 2rem;
      background-color: #fff;
      color: #61dafb;
      text-transform: uppercase;
    }
`;

const Myh3 = styled.h3`
        padding: 2rem;
        text-align: center;
        color: ${props => props.color};
        color: ${({color}) => color};
        color: ${({color}) => color || '#fff'};
        background-color: ${mainColor};
        transition: ${setTransitionTime("1s")};
        animation: ${fadeIn} 2s ease-out;

        ${({isButton}) => isButton && css`
            margin:auto;
            max-width:50%;
            border-radius:0.25rem;
            cursor:pointer;
        `}

        &:hover{
            background-color:${mainAlphaColor80}
        }
    `;

const ComponentesEstilizados = () => {
    return (
    <div>
        <GlobalStyle />
        <h2>Aprendiendo styled-components</h2>
        <Myh3>Hola Soy un 'h3' con estilos</Myh3>
        <Myh3 color='#61dafb'>Hola Soy un 'h3' con estilos de componentes</Myh3>
        <Myh3 isButton>Soy un h3 estilizado como boton</Myh3>
        <ThemeProvider theme={light}>
            <Box>Soy una caja light</Box>
            <BoxRounded>Soy una caja redondeada light</BoxRounded>
        </ThemeProvider>
        <ThemeProvider theme={dark}>
            <Box>Soy una caja dark</Box>
            <BoxRounded>Soy una caja redondeada dark</BoxRounded>
        </ThemeProvider>
    </div>
    )
}

export default ComponentesEstilizados