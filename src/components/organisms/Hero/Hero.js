import React, { useEffect } from 'react'
import styled from 'styled-components'
import GetStarted from '../../atoms/GetStarted/GetStarted'
import { ReactComponent as Quill } from '../../../assets/icons/quill.svg'
import { ReactComponent as Spring } from '../../../assets/icons/spring.svg'
import { ReactComponent as Tags } from '../../../assets/icons/htmlTags.svg'
import { gsap } from 'gsap'

const StyledWrapper = styled.div`
    h1 {
        font-size: 80px;
        margin: 0;
    }
    div {
        margin: 0;
    }
    width: 1320px;
    margin: 0 auto;
    padding: 48px 0;
    display: flex;
    justify-content: space-between;
    align-items: end;
`

const colorArray = [
    'rgb(162, 89, 255)',
    'rgb(85, 81, 255)',
    'rgb(15, 169, 88)',
    'rgb(0, 0, 0)',
]

const Hero = () => {
    const changeColor = () => {
        const timeline = gsap.timeline({ repeat: -1, repeatDelay: 4 })
        timeline.to('.design', { color: colorArray[1], duration: 0.4 })
        timeline.to('.design', {
            color: colorArray[3],
            duration: 0.4,
            delay: 4,
        })
        timeline.to('.align', { color: colorArray[0], duration: 0.4 })
        timeline.to('.align', {
            color: colorArray[3],
            duration: 0.4,
            delay: 4,
        })
        timeline.to('.build', { color: colorArray[2], duration: 0.4 })
        timeline.to('.build', {
            color: colorArray[3],
            duration: 0.4,
            delay: 4,
        })
    }

    useEffect(() => changeColor, [])

    return (
        <StyledWrapper>
            <div>
                <h1>
                    How you{' '}
                    <strong>
                        <span className="design">
                            design <Quill />,
                        </span>
                    </strong>
                    <strong>
                        <span className="align">
                            align <Spring />,
                            <br />
                        </span>
                    </strong>{' '}
                    and{' '}
                    <strong>
                        <span className="build">
                            build <Tags />
                        </span>
                    </strong>{' '}
                    matters. <br />
                    Do it together with Figma.
                </h1>
            </div>
            <GetStarted fontSize="36px" background="black">
                Get Started
            </GetStarted>
        </StyledWrapper>
    )
}

export default Hero
