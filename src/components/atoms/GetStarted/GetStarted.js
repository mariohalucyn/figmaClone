import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledWrapper = styled.a`
    background: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    text-decoration: none;
    box-sizing: border-box;
    border: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
    font-weight: 700;
    font-size: ${({ fontSize }) => fontSize};
    padding: 18px 34px;
    transition: 0.2s ease;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    cursor: pointer;
    &:hover {
        transform: translateY(-4px);
    }
`

const GetStarted = ({ width, height, fontSize, children, background }) => {
    return (
        <StyledWrapper
            style={{ background: background }}
            href=""
            width={width}
            height={height}
            fontSize={fontSize}
        >
            {children}
        </StyledWrapper>
    )
}

GetStarted.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    fontSize: PropTypes.string,
    children: PropTypes.string,
    background: PropTypes.string,
}

export default GetStarted
