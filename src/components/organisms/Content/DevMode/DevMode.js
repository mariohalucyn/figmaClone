import React from 'react'
import GetStarted from '../../../atoms/GetStarted/GetStarted'
import devModeImage from '../../../../assets/images/devMode.png'
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

const DevMode = () => {
    return (
        <StyledWrapper>
            <div>
                <strong>Dev Mode</strong>
                <h1>Bring design and dev closer</h1>
                <StyledContainer>
                    <div>
                        <p>
                            Introducing Dev Mode, a new space in Figma for
                            developers. Bring clarity to designs and give
                            developers the tools they need to translate them
                            into code.
                        </p>
                        <GetStarted background="black">
                            Explore DevMode
                        </GetStarted>
                    </div>
                    <img src={devModeImage} />
                </StyledContainer>
            </div>
        </StyledWrapper>
    )
}

export default DevMode
