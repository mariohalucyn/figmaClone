import React from 'react'
import Header from './components/organisms/Header/Header'
import Footer from './components/organisms/Footer/Footer'
import Popup from './components/atoms/Popup/Popup'
import styled, { ThemeProvider } from 'styled-components'
import LogoSlider from './components/atoms/LogoSlider/LogoSlider'
import Hero from './components/organisms/Hero/Hero'
import { theme } from './assets/themes/theme'
import Content from './components/organisms/Content/Content'

const StyledWrapper = styled.html`
    box-sizing: border-box;
    h1 {
        font-size: 80px;
        margin: 0;
    }
`

const App = () => {
    return (
        <StyledWrapper>
            <ThemeProvider theme={theme}>
                <Header />
                <Hero />
                <LogoSlider />
                <Content />
                <Footer />
                <Popup />
            </ThemeProvider>
        </StyledWrapper>
    )
}

export default App
