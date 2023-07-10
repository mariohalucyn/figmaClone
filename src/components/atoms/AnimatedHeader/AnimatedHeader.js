import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.h1`
    font-size: 80px;
`

// const wordArray = ['aligning', 'designing', 'building', 'making']
// const colorArray = [
//     'rgb(199, 185, 255)',
//     'rgb(85, 81, 255)',
//     'rgb(15, 169, 88)',
//     'rgb(255, 255, 255)',
// ]

const AnimatedHeader = () => {
    return (
        <StyledWrapper>
            Start <span className="span">example</span>
            <br />
            with figma
        </StyledWrapper>
    )
}

export default AnimatedHeader
