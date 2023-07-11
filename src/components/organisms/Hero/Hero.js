import React, { useEffect } from 'react'
import styled from 'styled-components'
import GetStarted from '../../atoms/GetStarted/GetStarted'
import { ReactComponent as Quill } from '../../../assets/icons/quill.svg'
import { ReactComponent as Spring } from '../../../assets/icons/spring.svg'
import { ReactComponent as Tags } from '../../../assets/icons/htmlTags.svg'
import { gsap } from 'gsap'
import { theme } from '../../../assets/themes/theme'
import heroImage from '../../../assets/images/hero.png'

const StyledHero = styled.div`
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

const StyledWrapper = styled.div`
    width: 1320px;
    margin: 0 auto;
    img {
        border-radius: 24px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
`

const colorArray = [
    theme.colors.purple,
    theme.colors.blue,
    theme.colors.green,
    theme.colors.black,
]

const Hero = () => {
    const changeColor = () => {
        gsap.timeline({ repeat: -1 })
            .to('.design', { color: colorArray[1], duration: 0.4 })
            .to('.design', {
                color: colorArray[3],
                duration: 0.4,
                delay: 4,
            })
            .to('.align', { color: colorArray[0], duration: 0.4 })
            .to('.align', {
                color: colorArray[3],
                duration: 0.4,
                delay: 4,
            })
            .to('.build', { color: colorArray[2], duration: 0.4 })
            .to('.build', {
                color: colorArray[3],
                duration: 0.4,
                delay: 4,
            })
    }

    useEffect(() => changeColor, [])

    return (
        <StyledWrapper>
            <StyledHero>
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
            </StyledHero>
            <img src={heroImage}></img>
        </StyledWrapper>
    )
}

export default Hero
