import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../../assets/themes/theme'

const StyledWrapper = styled.h1`
    font-size: 80px;
`

const wordArray = ['aligning', 'designing', 'building', 'making']
const colorArray = [
    theme.colors.lightPurple,
    theme.colors.blue,
    theme.colors.green,
    theme.colors.white,
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
            if (index === 3) {
                setIndex((index = -1))
            }
        }, 2000)
    }

    useEffect(() => changeState, [])

    return (
        <StyledWrapper>
            Start <span style={{ color: color }}>{state}</span>
            <br />
            with figma
        </StyledWrapper>
    )
}

export default AnimatedHeader
