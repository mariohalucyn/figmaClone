import React from 'react'
import Header from './components/organisms/Header/Header'
import Footer from './components/organisms/Footer/Footer'

const App = () => {
    const siema = 'xd'
    return (
        <>
            <Header />
            <Footer props={siema} />
        </>
    )
}

export default App
