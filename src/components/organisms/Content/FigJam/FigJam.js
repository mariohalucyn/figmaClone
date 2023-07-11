import React from 'react'
import GetStarted from '../../../atoms/GetStarted/GetStarted'
import FigJamImage from '../../../../assets/images/FigJamImage.png'
import styled from 'styled-components'
import { StyledWrapper } from '../StyledWrapper'

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

const FigJam = () => {
    return (
        <StyledWrapper>
            <div>
                <strong>FigJam</strong>
                <h1>Align your team</h1>
                <StyledContainer>
                    <div>
                        <p>
                            FigJam is an online whiteboard where everyone who
                            builds products can collaborate. Use it to bring
                            your team together in new ways, from kickoffs and
                            stand ups to rituals and retros.
                        </p>
                        <GetStarted background="black">
                            Explore FigJam
                        </GetStarted>
                    </div>
                    <img src={FigJamImage} />
                </StyledContainer>
            </div>
        </StyledWrapper>
    )
}

export default FigJam
