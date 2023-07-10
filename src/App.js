import React from 'react'
import Header from './components/organisms/Header/Header'
import Footer from './components/organisms/Footer/Footer'
import Popup from './components/atoms/Popup/Popup'
import styled from 'styled-components'
import LogoSlider from './components/atoms/LogoSlider/LogoSlider'
import Hero from './components/organisms/Hero/Hero'

const StyledWrapper = styled.html`
    box-sizing: border-box;
`

const App = () => {
    return (
        <StyledWrapper>
            <Header />
            <Hero />
            <LogoSlider />
            <Footer />
            <Popup />
        </StyledWrapper>
    )
}

export default App
