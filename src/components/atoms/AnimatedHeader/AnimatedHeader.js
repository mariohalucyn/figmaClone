import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.h1`
    font-size: 80px;
`

const wordArray = ['aligning', 'designing', 'building', 'making']
const colorArray = [
    'rgb(199, 185, 255)',
    'rgb(85, 81, 255)',
    'rgb(15, 169, 88)',
    'rgb(255, 255, 255)',
]

const AnimatedHeader = () => {
    const [state, setState] = useState(wordArray[0])
    const [color, setColor] = useState(colorArray[0])
    let [index, setIndex] = useState(0)
    const changeState = () => {
        setInterval(() => {
            setIndex(index++)
            setColor(colorArray[index])
            setState(wordArray[index])
            console.log(index)
            if (index === 3) {
                setIndex((index = -1))
            }
        }, 2000)
    }

    useEffect(() => changeState, [])

    const StyledSpan = styled.span`
        color: ${color};
    `

    return (
        <StyledWrapper>
            Start <StyledSpan>{state}</StyledSpan>
            <br />
            with figma
        </StyledWrapper>
    )
}

export default AnimatedHeader
