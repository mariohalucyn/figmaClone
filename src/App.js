import React from 'react'
import Header from './components/organisms/Header/Header'
import Footer from './components/organisms/Footer/Footer'
import Popup from './components/atoms/Popup/Popup'
import styled, { ThemeProvider } from 'styled-components'
import LogoSlider from './components/atoms/LogoSlider/LogoSlider'
import Hero from './components/organisms/Hero/Hero'
import { theme } from './assets/themes/theme'

const StyledWrapper = styled.html`
    box-sizing: border-box;
`

const App = () => {
    return (
        <StyledWrapper>
            <ThemeProvider theme={theme}>
                <Header />
                <Hero />
                <LogoSlider />
                <Footer />
                <Popup />
            </ThemeProvider>
        </StyledWrapper>
    )
}

export default App
