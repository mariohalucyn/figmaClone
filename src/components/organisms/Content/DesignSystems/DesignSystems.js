import React from 'react'
import GetStarted from '../../../atoms/GetStarted/GetStarted'
import styled from 'styled-components'
import designSystems from '../../../../assets/images/designSystems.png'
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

const DesignSystems = () => {
    return (
        <StyledWrapper>
            <div>
                <strong>Design systems</strong>
                <h1>Scale design and development</h1>
                <StyledContainer>
                    <img src={designSystems} />
                    <div>
                        <p>
                            Save time and keep things consistent with reusable
                            assets in shared libraries. Standardize components
                            and variables so that there’s more time for
                            exploration, and less time doing busy work.
                        </p>
                        <GetStarted background="black">
                            Explore design systems
                        </GetStarted>
                    </div>
                </StyledContainer>
            </div>
        </StyledWrapper>
    )
}

export default DesignSystems
