import React from 'react'
import Design from './Design/Design'
import Prototype from './Prototype/Prototype'
import DevMode from './DevMode/DevMode'
import DesignSystems from './DesignSystems/DesignSystems'
import FigJam from './FigJam/FigJam'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 56px;
`

const Contact = () => {
    return (
        <StyledWrapper>
            <Design />
            <Prototype />
            <DevMode />
            <DesignSystems />
            <FigJam />
        </StyledWrapper>
    )
}

export default Contact
