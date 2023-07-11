import React from 'react'
import GetStarted from '../../../atoms/GetStarted/GetStarted'
import prototypeImage from '../../../../assets/images/prototype.png'
import styled from 'styled-components'
import { StyledWrapper } from '../StyledWrapper'

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 42px;
    a {
        display: inline-block;
    }
    p {
        margin: 0;
        font-size: 22px;
        overflow: hidden;
    }
`

const Prototype = () => {
    return (
        <StyledWrapper>
            <div>
                <strong>Prototype</strong>
                <h1>Make designs feel real</h1>
                <StyledContainer>
                    <img src={prototypeImage} />
                    <div>
                        <p>
                            Create realistic prototypes that allow for quick
                            iteration on flows and states. Test the full,
                            interactive experience to get better feedback,
                            sooner.
                        </p>
                        <GetStarted background="black">
                            Explore prototyping
                        </GetStarted>
                    </div>
                </StyledContainer>
            </div>
        </StyledWrapper>
    )
}

export default Prototype
