import React, { useEffect, useRef } from 'react'
import GetStarted from '../../../atoms/GetStarted/GetStarted'
import designImage from '../../../../assets/images/design.png'
import styled from 'styled-components'
import { StyledWrapper } from '../StyledWrapper'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 42px;
    a {
        display: inline-block;
    }
    p {
        margin: 0;
        padding-bottom: 16px;
        font-size: 22px;
    }
    img {
        overflow: hidden;
    }
`

const Design = () => {
    const myRef = useRef(null)
    useEffect(() => {
        const el = myRef.current
        gsap.to(el, {
            scrollTrigger: { trigger: el, markers: true },
            background: 'blue',
        })
    }, [])
    return (
        <StyledWrapper>
            <div>
                <strong>Design</strong>
                <h1>Co-create in one space</h1>
                <StyledContainer ref={myRef}>
                    <div>
                        <p>
                            Work together in real time and empower designers to
                            create in new ways. Keep workflows efficient with
                            tools that give every team visibility throughout the
                            process.
                        </p>
                        <GetStarted background="black">
                            Explore design
                        </GetStarted>
                    </div>
                    <img src={designImage} />
                </StyledContainer>
            </div>
        </StyledWrapper>
    )
}

export default Design
