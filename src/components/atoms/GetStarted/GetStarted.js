import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledWrapper = styled.button`
    background: rgb(85, 81, 255);
    color: rgb(255, 255, 255);
    border-radius: 10px;
    border: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
    font-weight: 700;
    font-size: ${({ fontSize }) => fontSize};
    padding: 14px 24px 16px;
    transition: 0.2s ease;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    cursor: pointer;
    &:hover {
        transform: translateY(-4px);
    }
`

const GetStarted = ({ width, height, fontSize }) => {
    return (
        <StyledWrapper width={width} height={height} fontSize={fontSize}>
            Get started for free
        </StyledWrapper>
    )
}

GetStarted.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    fontSize: PropTypes.string,
}

export default GetStarted
